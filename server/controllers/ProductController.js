const {Op} = require('sequelize')

const Product = require( './../models/Index' ).Product;
const MainController = require( './MainController' );

const list = async ( req, res ) => {
    const {data, error} = await MainController.list( req, Product );
    if ( error ) {
        return res.status( 400 ).json( error )
    } else {
         return res.status( 200 ).json( data )
    }
}
const getOne = async ( req, res ) => {
     const {data, error} = await MainController.getOne( req, Product );
    if ( error ) {
        return res.status( 400 ).json( error )
    } else {
         return res.status( 200 ).json( data )
    }
}
const postProduct = async ( req, res ) => {
    const {body, files} = req
    const getFilePath = MainController.getFileWithPath(files[0])
    const data = {
        ...body,
        product_img_url: getFilePath,
    }
    const createData = await MainController.create( Product, data );
    if ( createData.hasOwnProperty('id')) {
        return res.status( 200 ).json( {
           ...createData
        })
    } else {
        return res.status( 400 ).json( {
           error: 'Unable to create product at this time'
        })
    }
    
}

module.exports = {list, getOne, postProduct}