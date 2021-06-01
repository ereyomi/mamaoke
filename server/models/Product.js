'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    product_img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sec_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};