// Importing the Post model from the models directory
const { Post } = require('../models');

// Array of post data to be seeded into the database
const postData = [
  {
    title: 'First Post',
    content: 'This is the content of the first post',
    userId: 1,
  },
  {
    title: 'Second Post',
    content: 'This is the content of the second post',
    userId: 2,
  },
];

// Function to seed the post data into the database
const seedPosts = () => {
  // Bulk create the posts using the postData array
  return Post.bulkCreate(postData);
};

// Export the seedPosts function
module.exports = seedPosts;
