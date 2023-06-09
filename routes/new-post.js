const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// GET /post/new
router.get('/post/new', (req, res) => {
  // Render the new-post view
  res.render('new-post');
});

// POST /api/posts
router.post('/api/posts', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new blog post in the database
    const post = await Post.create({
      title,
      content,
      userId: req.session.userId, // Assuming you have stored the logged-in user's ID in the session
    });

    // Redirect to the newly created post or send a success response
    res.redirect(`/post/${post.id}`);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

module.exports = router;
