'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      console.log( models );
      /* 
        {
        categories: categories,
        orders: orders,
        product: product,
        user: user
        }
      
       */
        User.hasMany(models.Order, {
          foreignKey: {
          name: 'user_id',
          type: DataTypes.INTEGER,
          allowNull: false,
        }
        });
    }
  };
  User.init( {
    id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: DataTypes.INTEGER,
    password: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    sequelize,
    modelName: 'User',
  } );
  /* User.beforeCreate(async (user, options) => {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
  }); */
  return User;
};