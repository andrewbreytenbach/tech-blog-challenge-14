const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData);
  console.log("Posts have been seeded!");

  process.exit(0);
};

seedDatabase();
