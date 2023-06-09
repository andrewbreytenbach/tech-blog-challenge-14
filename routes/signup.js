const express = require('express');
const router = express.Router();
const { User } = require('../models');

// GET /signup
router.get('/signup', (req, res) => {
  // Render the signup view
  res.render('signup');
});

// POST /api/users
router.post('/api/users', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Create a new user in the database
    const user = await User.create({ username, password });

    // Store the user's ID in the session
    req.session.userId = user.id;

    // Redirect to the dashboard or send a success response
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
