const express = require('express');
const router = express.Router();
const {
  listUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/UserController');
// route
router.get('/users', listUsers);
router.get('/user/:id', getOneUser);
router.get('/users/:page', listUsers);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
