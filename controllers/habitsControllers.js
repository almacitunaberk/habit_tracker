const catchAsync = require('../utils/catchAsync');
const Habit = require('../models/habitModel');
const User = require('../models/userModel');
const { sequelize } = require('../database/db');

module.exports.getAllHabits = catchAsync(async (req, res, next) => {
  const user = req.user;
  const _habits = await Habit.findAll({ where: { user_id: user.id } });
  const habits = _habits.map((habit) => habit.dataValues);
  res.json(habits);
});

module.exports.getHabitById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const habit = await Habit.findAll({ where: { id } });
  res.json(habit[0]);
});

module.exports.createNewHabit = catchAsync(async (req, res) => {
  const user = req.user;
  const habit = req.body;
  habit.days_of_completion = [];
  const newHabit = await Habit.create(habit);
  await newHabit.setUser(user.id);
  res.json(newHabit.dataValues);
});

module.exports.editHabitById = (req, res) => {
  res.send('NOT YET!');
};

module.exports.deleteHabitById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const deletedHabit = await sequelize.query(`DELETE FROM "habits" WHERE "habits"."id" = '${id}' RETURNING *;`);
  res.json(deletedHabit);
});
