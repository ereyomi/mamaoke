
const express = require( "express" );
const router = express.Router();
const { 
    listCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require( './../controllers/CategoryController' );
// route
router.get( '/categories', listCategories);
router.get( '/category/:id', getOneCategory );
router.get( '/catrogories/:page', listCategories );
router.post( '/category', createCategory );
router.patch( '/category/:id', updateCategory );
router.delete( '/category/:id', deleteCategory );

module.exports = router