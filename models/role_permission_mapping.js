'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_permission_mapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role_permission_mapping.init( {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    permission_id: {
      type: DataTypes.UUID
    },
    role_id: {
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'role_permission_mapping',
  });
  return role_permission_mapping;
};