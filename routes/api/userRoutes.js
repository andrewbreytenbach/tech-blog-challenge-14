// userRoutes.js

const router = require('express').Router();
const { signup, login, logout } = require('../../controllers/userController');

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Logout route
router.get('/logout', logout);

module.exports = router;
