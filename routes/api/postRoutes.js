// postRoutes.js

const router = require('express').Router();
const { createPost, updatePost, deletePost } = require('../../controllers/postController');

// Create a new post route
router.post('/posts', createPost);

// Update a post route
router.put('/posts/:id', updatePost);

// Delete a post route
router.delete('/posts/:id', deletePost);

module.exports = router;
