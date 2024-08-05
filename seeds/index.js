const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPostData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();
  await seedUser();

  process.exit(0);
};

seedAll();
