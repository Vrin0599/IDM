'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('repositories', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        allowNull: false,
        primaryKey: true,
      },
      data: {
        type: Sequelize.JSONB
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.UUID  
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.UUID
      }
     });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('repositories');
  }
};