const {User} = require('../models');

const userData = [
    {
        id: 1,
        username: 'LeenaCruz',
        password: '$2a$10$HBjjYNU3cQmHINrn4vtXHeCCR6fwT8qpdNdtdC5Uqu7L/Xqc/FpHi'
    },
    {
       id: 2,
        username: 'Ekutoru',
        password: '$2a$10$.pF3BrTJ6DSaCYdPhTT0I.Ps8vCcJtm.YzsYpePhrEDpllTOqBRNW'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;