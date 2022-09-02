const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

module.exports.loginUser = (req, res, next) => {
  res.json(req.user);
};

module.exports.registerNewUser = (req, res, next) => {
  res.send(req.user);
};
module.exports.logout = () => {};
