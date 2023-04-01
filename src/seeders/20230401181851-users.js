/* eslint-disable max-lines-per-function */
const { hashPassword } = require('../auth/utils');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        username: 'user1',
        password: await hashPassword('password1'),
        email: 'user1@example.com',
      },
      {
        id: 2,
        username: 'user2',
        password: await hashPassword('password2'),
        email: 'user2@example.com',
      },
      {
        id: 3,
        username: 'user3',
        password: await hashPassword('password3'),
        email: 'user3@example.com',
      },
      {
        id: 4,
        username: 'user4',
        password: await hashPassword('password4'),
        email: 'user4@example.com',
      },
      {
        id: 5,
        username: 'user5',
        password: await hashPassword('password5'),
        email: 'user5@example.com',
      },
      {
        id: 6,
        username: 'user6',
        password: await hashPassword('password6'),
        email: 'user6@example.com',
      },
      {
        id: 7,
        username: 'user7',
        password: await hashPassword('password7'),
        email: 'user7@example.com',
      },
      {
        id: 8,
        username: 'user8',
        password: await hashPassword('password8'),
        email: 'user8@example.com',
      },
      {
        id: 9,
        username: 'user9',
        password: await hashPassword('password9'),
        email: 'user9@example.com',
      },
      {
        id: 10,
        username: 'user10',
        password: await hashPassword('password10'),
        email: 'user10@example.com',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
