const {
  getAllHabits,
  getHabitById,
  createNewHabit,
  editHabitById,
  deleteHabitById,
} = require('../controllers/habitsControllers');
const { isLoggedIn } = require('../middleware/isLoggedIn');
const { isHabitOwner } = require('../middleware/isHabitOwner');

const router = require('express').Router();

router.get('/', isLoggedIn, getAllHabits);
router.get('/:id', isLoggedIn, isHabitOwner, getHabitById);
router.post('/', isLoggedIn, createNewHabit);
router.put('/:id', isLoggedIn, isHabitOwner, editHabitById);
router.delete('/:id', isLoggedIn, isHabitOwner, deleteHabitById);

module.exports = router;
