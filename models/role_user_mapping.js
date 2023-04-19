"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role_user_mappings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      role_user_mappings.belongsTo(models.Users, {
        foreignKey: {
          name: "user_id",
        },
      });
      role_user_mappings.belongsTo(models.roles, {
        foreignKey: {
          name: "role_id",
        },
      });
    }
  }
  role_user_mappings.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "role_user_mappings",
    }
  );
  return role_user_mappings;
};
