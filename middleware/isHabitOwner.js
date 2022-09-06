const Habit = require('../models/habitModel');

module.exports.isHabitOwner = async (req, res, next) => {
  const habitId = req.params.id;
  const habits = await Habit.findAll({ where: { id: habitId } });
  if (habits[0].dataValues.user_id !== req.user.id) {
    return res.status(401).send('Unauthorized');
  }
  next();
};
