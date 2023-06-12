// commentRoutes.js

const router = require('express').Router();
const { addComment } = require('../../controllers/commentController');

// Add a comment route
router.post('/posts/:postId/comments', addComment);

module.exports = router;
