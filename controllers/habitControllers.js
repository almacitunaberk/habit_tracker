const catchAsync = require('../utils/catchAsync');
const pool = require('../database/db');

module.exports.getAllHabits = catchAsync(async (req, res, next) => {
  const response = await pool.query(`SELECT * FROM habits;`);
  res.json(response.rows);
});

module.exports.getHabitById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const response = await pool.query(`SELECT * FROM habits WHERE id = $1;`, [id]);
  if (response.rowCount === 0) {
    throw new Error('No such habit is found');
  }
  res.json(response.rows[0]);
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
