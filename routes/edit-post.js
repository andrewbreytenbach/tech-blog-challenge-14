const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// GET /post/edit/:id
router.get('/post/edit/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    // Retrieve the blog post with the specified ID from the database
    const post = await Post.findByPk(postId);

    if (!post) {
      // If the post is not found, render an error page or redirect to a different route
      res.status(404).send('Post not found');
      return;
    }

    // Render the edit-post view with the retrieved post
    res.render('edit-post', { post });
  } catch (error) {
    console.error('Error retrieving post:', error);
    res.status(500).send('Failed to retrieve post');
  }
});

// POST /api/posts/:id
router.post('/api/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    // Retrieve the blog post with the specified ID from the database
    const post = await Post.findByPk(postId);

    if (!post) {
      // If the post is not found, return an error response
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    // Update the post with the new title and content
    post.title = title;
    post.content = content;
    await post.save();

    // Redirect to the updated post or send a success response
    res.redirect(`/post/${post.id}`);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

module.exports = router;
