const catchAsync = require('../utils/catchAsync');
const Habit = require('../models/habitModel');
const User = require('../models/userModel');

module.exports.getAllHabits = catchAsync(async (req, res, next) => {
  const { user_id } = req.body;
  const _habits = await Habit.findAll({ where: { user_id: user_id } });
  const habits = _habits.map((habit) => habit.dataValues);
  res.json(habits);
});

module.exports.getHabitById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  return;
});

module.exports.createNewHabit = (req, res) => {
  res.send('NOT YET!');
};

module.exports.editHabitById = (req, res) => {
  res.send('NOT YET!');
};

module.exports.deleteHabitById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedHabit = await pool.query(`DELETE FROM habits WHERE id = $1`, [id]);
  res.json(deletedHabit);
});
