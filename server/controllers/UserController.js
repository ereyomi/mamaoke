const { Op } = require('sequelize');

const User = require('../models/Index').User;
const MainController = require('./MainController');

const listUsers = async (req, res) => {
  const { data, error } = await MainController.list(req, User);
  console.log(data);
  if (error) {
    return res.status(400).json(error);
  } else {
    return res.status(200).json(data);
  }
};
const getOneUser = async (req, res) => {
  const { data, error } = await MainController.getOneByPk(req, User);
  if (error) {
    return res.status(400).json(error);
  } else {
    return res.status(200).json(data);
  }
};
const createUser = async (req, res) => {
  const { body } = req;
  const createData = await MainController.create(User, body);
  if (createData.id) {
    return res.status(200).json({
      ...createData,
    });
  } else {
    return res.status(400).json({
      error: 'Unable to create category at this time',
    });
  }
};
const updateUser = async (req, res) => {
  const data = await MainController.update(User, req);
  if (data) {
    return res.status(200).json(data);
  } else {
    return res.status(400).json(data);
  }
};
const deleteUser = async (req, res) => {
  const data = await MainController.deleteModel(User, req);
  if (data) {
    return res.status(200).json(data);
  } else {
    return res.status(400).json(data);
  }
};

module.exports = {
  listUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
