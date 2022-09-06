const {
  getAllHabits,
  getHabitById,
  createNewHabit,
  editHabitById,
  deleteHabitById,
} = require('../controllers/habitsControllers');
const { isLoggedIn } = require('../middleware/isLoggedIn');
const passport = require('passport');

const router = require('express').Router();

//router.use(isLoggedIn);

router.get('/', getAllHabits);
router.get('/dum', (req, res, next) => {
  console.log('DUM REQ: ', req.user);
  res.send('');
});
router.get('/:id', getHabitById);
router.post('/', createNewHabit);
router.post('/:id', editHabitById);
router.delete('/:id', deleteHabitById);

module.exports = router;
