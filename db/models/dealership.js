'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dealership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Car }) {
      // define association here
      Dealership.belongsToMany(Car, {
        through: 'cars_to_dealerships',
        foreignKey: 'dealershipId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Dealership.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      imagePath: {
        type: DataTypes.STRING,
        field: 'image_path',
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.JSON,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: 'phone_number',
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Dealership',
      tableName: 'dealerships',
      underscored: true,
    }
  );
  return Dealership;
};
