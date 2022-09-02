const {
  getAllHabits,
  getHabitById,
  createNewHabit,
  editHabitById,
  deleteHabitById,
} = require('../controllers/habitsControllers');

const router = require('express').Router();

router.get('/', getAllHabits);
router.get('/:id', getHabitById);
router.post('/', createNewHabit);
router.post('/:id', editHabitById);
router.delete('/:id', deleteHabitById);

module.exports = router;
