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

module.exports = {list, getOne}