const {Op} = require('sequelize')

const Product = require( './../models/Index' ).Product;

const list = async ( req, res ) => {
    const {page} = req.params;
    const limit = 12;
    let offset = 0;
    const currentPage = page || 1;
    offset = ( currentPage > 1 ) ? ( currentPage - 1 ) * limit : offset;
    
    try {
        const {count, rows} = await Product.findAndCountAll( {
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        } );

        const numOfPage = count / limit;
        // check if number is whole number
        const checkIfWhole = numOfPage % 1;
        const lastPage = (checkIfWhole !== 0) ? Math.floor(numOfPage + 1) : Math.floor(numOfPage);
        return res.status( 200 ).json(
            {
                offset,
                perPage: limit,
                currentPage,
                total: count,
                lastPage,
                data: rows,
            }
        )
    } catch ( error ) {
        return res.status(400).json(error)
    }
}
const getOne = async ( req, res ) => {
    const {id} = req.params;
    try {
        const data = await Product.findOne( {
            where: {id: id},
        } );
        return res.status( 200 ).json( data )
    } catch ( error ) {
        return res.status(400).json(error)
    } 
}

module.exports = {list, getOne}