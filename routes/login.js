const express = require('express');
const router = express.Router();

// GET /login
router.get('/login', (req, res) => {
  res.render('login');
});

// POST /api/login
router.post('/api/login', (req, res) => {
  // Handle user login logic here
  // Retrieve the submitted username and password from req.body
  const { username, password } = req.body;

  // Validate the username and password
  if (username && password) {
    // Perform authentication and login logic
    // (e.g., check if the username and password are valid)

    // If authentication is successful, set the user as logged in
    // by storing the user information in the session
    req.session.user = {
      username, // Store relevant user information in the session
      // Additional user properties can be stored if needed
    };

    res.redirect('/dashboard');
  } else {
    // If the username or password is missing, render the login view with an error message
    res.render('login', { errorMessage: 'Please provide both username and password' });
  }
});

module.exports = router;
