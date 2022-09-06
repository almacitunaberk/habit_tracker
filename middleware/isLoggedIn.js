module.exports.isLoggedIn = (req, res, next) => {
  console.log('USER: ', user);
  if (!req.isAuthenticated()) {
    console.log('NOT LOGGED IN');
    return res.status(401).send('Unauthorized');
  }
  next();
};
