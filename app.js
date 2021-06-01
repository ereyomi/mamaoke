const express = require('express');
const bodyParser = require( 'body-parser' );

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use( bodyParser.urlencoded( {extended: false} ) );

const path = require('path');
const dir = path.join(__dirname, 'public');

app.use( express.static( dir ) )


const productController = require( './server/controllers/ProductController' );

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
} );


app.get( '/api/products', productController.list );
app.get( '/api/product/:id', productController.getOne );
app.get( '/api/products/:page', productController.list );
app.get( '/api/dir', ( req, res ) => {
  return res.json(dir);
} );


const port = process.env.PORT || 3100;

app.listen( port, function () {
    console.log( 'Express server listening on port ' + port )
} );