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
      Product.belongsTo( models.Category, 
        {
          foreignKey: 'id',
      });
      /* Product.hasMany( models.Order, {
        foreignKey: {
          category_id: 'myFooId',
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      } ) */
    }
  };
  Product.init( {
    id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    productImgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: DataTypes.STRING,
    price: DataTypes.INTEGER,
    secPrice: DataTypes.INTEGER,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    sequelize,
    modelName: 'Product',
  } );
  return Product;
};