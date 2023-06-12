// Importing the Comment model from the models directory
const { Comment } = require('../models');

// Array of comment data to be seeded into the database
const commentData = [
  {
    commentText: 'This is a comment on the first post',
    userId: 2,
    postId: 1,
  },
  {
    commentText: 'This is a comment on the second post',
    userId: 1,
    postId: 2,
  },
];

// Function to seed the comment data into the database
const seedComments = () => {
  // Bulk create the comments using the commentData array
  return Comment.bulkCreate(commentData);
};

// Export the seedComments function
module.exports = seedComments;

