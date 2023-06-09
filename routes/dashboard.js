const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

// GET /dashboard
router.get('/dashboard', async (req, res) => {
  try {
    // Retrieve the user's blog posts from the database
    const posts = await Post.findAll({
      where: { userId: req.session.userId }, // Assuming you have a userId stored in the session
      include: [{ model: User, attributes: ['username'] }],
    });

    // Render the dashboard view with the user's blog posts
    res.render('dashboard', { posts });
  } catch (error) {
    console.error('Error retrieving user posts:', error);
    res.status(500).send('Failed to retrieve user posts');
  }
});

module.exports = router;
