const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPostData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
//Run user before
  await seedUser();
  await seedBlogPost();
 

  process.exit(0);
};

seedAll();
