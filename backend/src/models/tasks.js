'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks.init({
    task: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: { msg: "duplicate task already exists" },
      validate: {
        notNull: { msg: "task cannot be empty" }
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE(3),
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tasks',
    underscored: true,
    freezeTableName: true,
    timestamps: true
  });
  return tasks;
};