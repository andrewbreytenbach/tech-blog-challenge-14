const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// GET route for the homepage
router.get('/', homeController.getHomePage);

module.exports = router;
