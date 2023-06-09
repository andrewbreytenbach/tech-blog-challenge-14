const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

// GET /
router.get('/', async (req, res) => {
  try {
    // Retrieve all blog posts with associated user information
    const posts = await Post.findAll({
      include: { model: User, attributes: ['username'] },
    });

    res.render('home', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
