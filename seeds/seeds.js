// Import the necessary dependencies
const { User, Post, Comment } = require('../models'); // Adjust the path to your models

// Define the sample data
const userData = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  // Add more user data as needed
];

const postData = [
  { title: 'Post 1', content: 'This is the content of Post 1', userId: 1 },
  { title: 'Post 2', content: 'This is the content of Post 2', userId: 1 },
  { title: 'Post 3', content: 'This is the content of Post 3', userId: 2 },
  // Add more post data as needed
];

const commentData = [
  { commentText: 'Comment 1 for Post 1', userId: 2, postId: 1 },
  { commentText: 'Comment 2 for Post 1', userId: 1, postId: 1 },
  { commentText: 'Comment 1 for Post 2', userId: 2, postId: 2 },
  // Add more comment data as needed
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Create users and store the created user objects
    const createdUsers = await User.bulkCreate(userData);

    // Create posts and store the created post objects
    const createdPosts = await Post.bulkCreate(postData);

    // Create comments
    await Comment.bulkCreate(commentData);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
}

// Call the seedDatabase function to populate the database
seedDatabase();
