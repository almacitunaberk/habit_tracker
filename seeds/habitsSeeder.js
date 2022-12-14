const { sequelize } = require('../database/db.js');

const Habit = require('../models/habitModel');
const User = require('../models/userModel');

const habits = [
  {
    name: 'Test Habit 1',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 2',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 3',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 4',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 5',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 6',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 7',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 8',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
  {
    name: 'Test Habit 9',
    description: 'Desc 1',
    frequency: 1,
    days_of_completion: 0,
  },
];

const seedHabits = async () => {
  await sequelize.query('DROP TABLE IF EXISTS habits');
  await Habit.sync({ alter: true });
  try {
    const users = await User.findAll({ where: {} });
    for (let i = 0; i < habits.length; i++) {
      const _habit = habits[i];
      const user = users[Math.floor(Math.random() * users.length)];
      const newHabit = await Habit.create(_habit);
      await newHabit.setUser(user.id);
    }
  } catch (err) {
    console.log(err);
  }
};

seedHabits().then(() => {
  sequelize.close();
});
