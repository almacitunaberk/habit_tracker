const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('habit_tracker', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB');
  } catch (err) {
    console.error(`ERROR while connecting to DB: ${err}`);
  }
};

module.exports = { sequelize, connectDB };
