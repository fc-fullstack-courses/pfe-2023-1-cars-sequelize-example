'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      modelYear: {
        type: DataTypes.INTEGER,
        field: 'model_year',
        validate: {
          isInt: true,
        }
      },
      engineVolume: {
        type: DataTypes.DECIMAL,
        field: 'engine_volume',
        validate: {
          isDecimal: true,
          min: 1,
          max: 100
        }
      },
      isUsed: {
        type: DataTypes.BOOLEAN,
        field: 'is_used',
        defaultValue: false
      },
      imagePath: {
        type: DataTypes.STRING,
        field: 'image_path'
      },
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars',
      underscored: true
    }
  );
  return Car;
};
