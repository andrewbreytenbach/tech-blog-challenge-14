const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// GET route for viewing a blog post
router.get('/blog/:id', blogController.getBlogPost);

// POST route for creating a new blog post
router.post('/blog', blogController.createBlogPost);

module.exports = router;
