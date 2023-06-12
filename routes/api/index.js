const router = require('express').Router();

// Import the necessary routes
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// User routes
router.use('/users', userRoutes);

// Post routes
router.use('/posts', postRoutes);

// Comment routes
router.use('/comments', commentRoutes);

module.exports = router;
