// Importing the User model from the models directory
const { User } = require('../models');

// Array of user data to be seeded into the database
const userData = [
  {
    email: 'john@example.com',
    password: 'password123',
  },
  {
    email: 'jane@example.com',
    password: 'password456',
  },
];

// Function to seed the user data into the database
const seedUsers = () => {
  // Bulk create the users using the userData array
  return User.bulkCreate(userData);
};

// Export the seedUsers function
module.exports = seedUsers;
