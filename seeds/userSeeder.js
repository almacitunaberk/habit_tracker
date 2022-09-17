const { sequelize } = require('../database/db.js');

const User = require('../models/userModel');

const users = [
  {
    username: 'test1',
    email_address: 'test1@gmail.com',
    password: '123456',
    full_name: 'Test 1',
  },
  {
    username: 'test2',
    email_address: 'test2@gmail.com',
    password: '123456',
    full_name: 'Test 2',
  },
  {
    username: 'test3',
    email_address: 'test3@gmail.com',
    password: '123456',
    full_name: 'Test 3',
  },
  {
    username: 'test4',
    email_address: 'test4@gmail.com',
    password: '123456',
    full_name: 'Test 1',
  },
  {
    username: 'test5',
    email_address: 'test5@gmail.com',
    password: '123456',
    full_name: 'Test 5',
  },
];

const seedUsers = async () => {
  await sequelize.query('DROP TABLE IF EXISTS users');
  await User.sync({ alter: true });
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userIns = await User.create(user);
    console.log(`User instance created: ${JSON.stringify(userIns)}`);
  }
};

seedUsers().then(() => {
  console.log('Closing the connection');
  sequelize.close();
});
