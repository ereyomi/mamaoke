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
      /* Product.belongsTo( models.Category, 
        {
          foreignKey: {
            name: 'id',
            allowNull: false,
      }
    }); */
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
    description:{ type: DataTypes.TEXT,  allowNull: true,},
    productImgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {type: DataTypes.STRING, allowNull: true,},
    price: {type:DataTypes.INTEGER, allowNull: true,},
    secPrice: {type: DataTypes.INTEGER, allowNull: true,},
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW,  allowNull: true,},
    updatedAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW,  allowNull: true,}
  }, {
    sequelize,
    modelName: 'Product',
  } );
  return Product;
};