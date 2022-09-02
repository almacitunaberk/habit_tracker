const express = require('express');
const expressSession = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./database/db.js');
// ROUTES
connectDB();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/userModel');

const habitsRouter = require('./routes/habitsRouter');
const userRouter = require('./routes/userRouter');
const { usernameExists, createUser, matchPassword } = require('./utils/databaseHelper.js');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 30,
      maxAge: 1000 * 60 * 30,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  'local-login',
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) return done(null, false);
      //const isMatch = await matchPassword(password, user.password);
      const isMatch = password === user.password;
      if (!isMatch) return done(null, false);
      console.log(user);
      return done(null, user);
    } catch (err) {
      done(err, null);
    }
  })
);

passport.use(
  'local-register',
  new LocalStrategy({ passReqToCallback: true }, async (req, _, __, done) => {
    try {
      const { username, password, email_address, full_name } = req.body;
      const user = await User.findOne({ where: { username } });
      if (user) return done(null, false);
      const email = await User.findOne({ where: { email_address } });
      if (email) return done(null, false);
      const newUser = await createUser({ username, password, email_address, full_name });
      return done(null, user);
    } catch (err) {
      console.log(err);
      done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const { err, user } = await User.findByPk(id);
  if (err) {
    return done(err);
  }
  done(null, user);
});

const PORT = process.env.PORT || 4000;

app.use('/habits', habitsRouter);
app.use('/', userRouter);

app.all('*', (req, res, next) => {
  next(new Error('Error occured'));
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
