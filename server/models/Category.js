'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        foreignKey: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      } );
    }
  };
  Category.init({
    id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};