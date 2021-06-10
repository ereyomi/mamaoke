const express = require('express');
const bodyParser = require( 'body-parser' );
const cors = require('cors');
const app = express();

// enabling CORS for all requests
app.use( cors() );

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use( bodyParser.urlencoded( {extended: true} ) );

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
const path = require('path');
const dir = path.join(__dirname, 'public');

app.use( express.static( dir ) )
/*  */

const productController = require( './server/controllers/ProductController' );
const {upload, uploadSingle, uploadMultiple, postSingleImg,postMultipleImg} = require( './server/controllers/MainController' );

app.get( '/api/products', productController.list);
app.get( '/api/product/:id', productController.getOne );
app.get( '/api/products/:page', productController.list );
app.post( '/api/product', upload.any(), productController.postProduct );
app.patch( '/api/product', productController.updateProductDetails );

app.post('/postimg', uploadSingle,postSingleImg);

app.post('/multiple', uploadMultiple,postMultipleImg)

const port = process.env.PORT || 3100;

app.listen( port, function () {
    console.log( 'Express server listening on port ' + port )
} );