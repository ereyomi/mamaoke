
const express = require( "express" );
const router = express.Router();
const {registerUser, login, getUserRefreshToken} = require( './../controllers/UserController' );
// route
router.post('/register', registerUser);
router.post('/login', login);
router.post('/token', getUserRefreshToken)

module.exports = router