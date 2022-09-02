const { sequelize } = require('../database/db.js');
const { Sequelize, Model, DataTypes } = require('sequelize');
const User = require('./userModel');

class Habit extends Model {}

Habit.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    days_of_completion: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      allowNull: false,
      defaultValue: [],
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'habit',
    underscored: true,
    timestamps: false,
  }
);

module.exports = Habit;
