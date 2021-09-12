
const express = require( "express" );
const router = express.Router();
const {list, getOne, postProduct, updateProductDetails, deleteProduct} = require( './../controllers/ProductController' );
const { upload, uploadSingle, uploadMultiple, postSingleImg, postMultipleImg } = require('./../controllers/MainController');
const {verifyToken} = require('./../middleware/auth.js')
// route
router.get( '/products', verifyToken, list);
router.get( '/product/:id', getOne );
router.get( '/products/:page', list );
router.post( '/product', upload.any(), postProduct );
router.patch( '/product', updateProductDetails );
router.delete( '/product/:id', deleteProduct );
router.post('/postimg', uploadSingle,postSingleImg);
router.post( '/multiple', uploadMultiple, postMultipleImg );

module.exports = router