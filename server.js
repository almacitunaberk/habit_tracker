const express = require('express');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./database/db.js');

connectDB();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Habit = require('./models/habitModel');
const User = require('./models/userModel');

const habitsRouter = require('./routes/habitsRouter');
const userRouter = require('./routes/userRouter');
const { createUser, matchPassword } = require('./utils/databaseHelper.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 600,
      expires: Date.now() + 1000 * 60 * 600,
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
      const isMatch = await matchPassword(password, user.password);
      if (!isMatch) return done(null, false);
      return done(null, user.dataValues);
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
      return done(null, newUser);
    } catch (err) {
      done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user.dataValues);
  });
});

const PORT = process.env.PORT || 4000;

app.use('/habits', habitsRouter);
app.use('/', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
