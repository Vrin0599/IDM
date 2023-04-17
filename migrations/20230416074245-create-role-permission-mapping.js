'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_permission_mappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      permission_id: {
        type: Sequelize.UUID
      },
      role_id: {
        type: Sequelize.UUID
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role_permission_mappings');
  }
};