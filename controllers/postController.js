// postController.js

const { Post, User } = require('../models');

const postController = {
  // Handler for creating a new blog post
  async createPost(req, res) {
    try {
      // Create a new post in the database
      const post = await Post.create({ ...req.body, userId: req.session.userId });

      // Redirect to the dashboard
      res.redirect('/dashboard');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create blog post' });
    }
  },

  // Handler for updating a blog post
  async updatePost(req, res) {
    try {
      // Update the post in the database
      await Post.update(req.body, { where: { id: req.params.id } });

      // Redirect to the dashboard
      res.redirect('/dashboard');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update blog post' });
    }
  },

  // Handler for deleting a blog post
  async deletePost(req, res) {
    try {
      // Delete the post from the database
      await Post.destroy({ where: { id: req.params.id } });

      // Redirect to the dashboard
      res.redirect('/dashboard');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete blog post' });
    }
  },
};

module.exports = postController;
