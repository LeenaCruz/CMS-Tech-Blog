const {User} = require('../models');

const userData = [
    {
        username: 'LeenaCruz',
        password: 'pass12345'
    },
    {
        username: 'Ekutoru',
        password: '12345534'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;