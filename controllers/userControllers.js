const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

module.exports.loginUser = (req, res, next) => {
  res.json({
    user: req.user,
    cookie: req.session.cookie,
    userId: req.session.passport.user,
  });
};

module.exports.registerNewUser = (req, res, next) => {
  res.json({
    user: req.user,
    cookie: req.session.cookie,
    userId: req.session.passport.user,
  });
};
module.exports.logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log('ERROR logging out: ', err);
      return next(err);
    }
  });
};
