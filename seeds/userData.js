const {User} = require('../models');

const userData = [
    {
        id: 1,
        username: 'LeenaCruz',
        password: 'pass12345'
    },
    {
       id: 2,
        username: 'Ekutoru',
        password: '12345534'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;