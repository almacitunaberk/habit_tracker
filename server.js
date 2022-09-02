const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const pool = require('./database/db');
const bodyParser = require('body-parser');

// ROUTES

const habitsRouter = require('./routes/habitsRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/habits', habitsRouter);

app.all('*', (req, res, next) => {
  next(new Error('Error occured'));
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
