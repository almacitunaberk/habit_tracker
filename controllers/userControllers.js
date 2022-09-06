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
module.exports.logout = () => {};
