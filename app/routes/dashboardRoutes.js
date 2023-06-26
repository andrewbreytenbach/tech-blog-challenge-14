const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// GET route for the dashboard page
router.get('/dashboard', dashboardController.getDashboardPage);

// DELETE route for deleting a blog post
router.delete('/blog/:id', dashboardController.deleteBlogPost);

module.exports = router;
