const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Route for user-related endpoints
router.use('/users', userRoutes);

// Route for post-related endpoints
router.use('/posts', postRoutes);

// Route for comment-related endpoints
router.use('/comments', commentRoutes);

module.exports = router;
