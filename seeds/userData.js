const {User} = require('../models');

const userData = [
    {
        username: 'LeenaCruz',
    },
    {
        username: 'Ekutoru',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;