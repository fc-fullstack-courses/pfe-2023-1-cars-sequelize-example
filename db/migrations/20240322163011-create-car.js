'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelYear: {
        type: Sequelize.INTEGER,
        field: 'model_year'
      },
      engineVolume: {
        type: Sequelize.DECIMAL,
        field: 'engine_volume'
      },
      isUsed: {
        type: Sequelize.BOOLEAN,
        field: 'is_used',
        defaultValue: false
      },
      imagePath: {
        type: Sequelize.STRING,
        field: 'image_path'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};