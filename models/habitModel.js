const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/db.js');
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
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'habit',
    underscored: true,
  }
);

Habit.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Habit;
