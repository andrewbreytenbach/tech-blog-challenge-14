// homeController.js

const { Post, User } = require('../models');

const homeController = {
  // Handler for the homepage route
  async homepage(req, res) {
    try {
      // Fetch existing blog posts
      const posts = await Post.findAll({ include: User });

      // Render the homepage view with the posts data
      res.render('homepage', { posts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve blog posts' });
    }
  },
};

module.exports = homeController;
