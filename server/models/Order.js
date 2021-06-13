'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo( models.User )
      Order.belongsTo( models.Product)
    }
  };
  Order.init({
    id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
    status: DataTypes.INTEGER,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};