const express = require('express');
const router = express.Router();
const { Comment } = require('../models');

// POST /api/comments
router.post('/api/comments', async (req, res) => {
  try {
    // Retrieve the comment data from the request body
    const { postId, content } = req.body;

    // Create the comment in the database
    const comment = await Comment.create({
      postId,
      content,
      userId: req.session.userId, // Assuming you have a userId stored in the session
    });

    // Send a response indicating the comment was created successfully
    res.status(201).json({ comment });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

module.exports = router;
