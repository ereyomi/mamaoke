
const express = require( "express" );
const router = express.Router();
const {registerUser} = require( './../controllers/UserController' );
// route
router.post( '/register', registerUser );

module.exports = router