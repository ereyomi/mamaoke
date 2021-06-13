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
//router routes
const productRouter = require('./server/router/ProductRouter')
app.use('/api', productRouter);
/*  */

const port = process.env.PORT || 3100;

app.listen( port, function () {
    console.log( 'Express server listening on port ' + port )
} );