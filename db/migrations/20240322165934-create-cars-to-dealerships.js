'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars_to_dealerships', { 
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'car_id',
        references: {
          model: 'cars',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      dealershipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'dealership_id',
        references: {
          model: 'dealerships',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars_to_dealerships');
  }
};
