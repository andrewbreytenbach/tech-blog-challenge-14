// Importing necessary dependencies and the seeders
const sequelize = require('../config/connection');
const userSeeds = require('./user-seeder');
const postSeeds = require('./post-seeder');
const commentSeeds = require('./comment-seeder');

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to the database
    await sequelize.sync({ force: true });

    // Seed the users
    await userSeeds();

    // Seed the posts
    await postSeeds();

    // Seed the comments
    await commentSeeds();

    // Success message
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }

  // Disconnect from the database
  sequelize.close();
};

// Call the seedDatabase function
seedDatabase();
