// dashboardController.js

const { Post, User } = require('../models');

const dashboardController = {
  // Handler for the dashboard route
  async dashboard(req, res) {
    try {
      // Fetch user-created blog posts
      const posts = await Post.findAll({ where: { userId: req.session.userId }, include: User });

      // Render the dashboard view with the posts data
      res.render('dashboard', { posts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve user blog posts' });
    }
  },
};

module.exports = dashboardController;
