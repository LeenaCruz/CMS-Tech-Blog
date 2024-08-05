const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPostData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();

//   await seedPaintings();

  process.exit(0);
};

seedAll();
