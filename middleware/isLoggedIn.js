module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log('Not logged in');
    return res.status(401).send('Unauthorized');
  }
  next();
};
