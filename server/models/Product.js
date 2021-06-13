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
      Product.belongsTo( models.Category)
      Product.hasMany( models.Order, {
        foreignKey: {
          name: 'product_id',
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      } )
    }
  };
  Product.init( {
    id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sec_price: DataTypes.INTEGER, autoIncrement: true,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    sequelize,
    modelName: 'Product',
  } );
  return Product;
};