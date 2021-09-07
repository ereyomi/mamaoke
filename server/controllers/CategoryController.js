const {Op} = require('sequelize')

const Category = require( './../models/Index' ).Category;
const MainController = require( './MainController' );

const listCategories = async ( req, res ) => {
    const {data, error} = await MainController.list( req, Category );
    if ( error ) {
        return res.status( 400 ).json( error )
    } else {
         return res.status( 200 ).json( data )
    }
}
const getOneCategory = async ( req, res ) => {
     const {data, error} = await MainController.getOne( req, Category );
    if ( error ) {
        return res.status( 400 ).json( error )
    } else {
         return res.status( 200 ).json( data )
    }
}
const createCategory = async ( req, res ) => {
    const {body} = req;
    const createData = await MainController.create( Category, body );
    console.log(createData, createData.id);
    if ( createData.id) {
        return res.status( 200 ).json( {
           ...createData
        })
    } else {
        return res.status( 400 ).json( {
           error: 'Unable to create category at this time'
        })
    } 
}
const updateCategory = async ( req, res ) => {
    const data = await MainController.update( Category, req )
    if ( data ) {
        return res.status( 200 ).json(data)
    } else {
        return res.status( 400 ).json(data)
    }
}
const deleteCategory = async ( req, res ) => {
    const data = await MainController.deleteModel( Category, req )
    console.log(data);
    if ( data ) {
        return res.status( 200 ).json(data)
    } else {
        return res.status( 400 ).json(data)
    }
}

module.exports = {
    listCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory
};