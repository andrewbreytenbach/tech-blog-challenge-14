const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authenticationController');

// GET route for the signup page
router.get('/signup', authenticationController.getSignupPage);

// POST route for creating a new user
router.post('/signup', authenticationController.signup);

// GET route for the login page
router.get('/login', authenticationController.getLoginPage);

// POST route for user login
router.post('/login', authenticationController.login);

// GET route for user logout
router.get('/logout', authenticationController.logout);

module.exports = router;
