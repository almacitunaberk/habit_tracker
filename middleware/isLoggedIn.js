module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log('NOT LOGGED IN');
    return res.status(401).send('Unauthorized');
  }
  next();
};
