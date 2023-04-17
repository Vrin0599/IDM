'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_user_mappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.UUID
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role_user_mappings');
  }
};