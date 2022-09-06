const router = require('express').Router();
const passport = require('passport');

const { loginUser, registerNewUser, logout } = require('../controllers/userControllers.js');

router.post('/login', passport.authenticate('local-login', { keepSessionInfo: true }), loginUser);
router.post('/register', passport.authenticate('local-register'), registerNewUser);
router.post('/logout', logout);

module.exports = router;
