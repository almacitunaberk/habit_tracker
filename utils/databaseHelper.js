const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

module.exports.usernameExists = async (username) => {
  const data = await User.findOne({
    where: {
      username: username,
    },
  });
  if (!data) return false;
  return data;
};

module.exports.createUser = async ({ username, email_address, password, full_name }) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const data = await User.create({
    username,
    email_address,
    password: hashedPassword,
    full_name,
  });
  if (!data) return false;
  return data;
};

module.exports.matchPassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};
