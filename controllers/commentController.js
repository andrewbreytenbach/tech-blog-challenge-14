// commentController.js

const { Comment, User } = require('../models');

const commentController = {
  // Handler for adding a comment to a blog post
  async addComment(req, res) {
    try {
      // Create a new comment in the database
      await Comment.create({ ...req.body, userId: req.session.userId });

      // Redirect back to the blog post page
      res.redirect(`/posts/${req.params.postId}`);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add comment' });
    }
  },
};

module.exports = commentController;
