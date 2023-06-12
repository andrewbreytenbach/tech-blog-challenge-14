// userController.js

const { User } = require('../models');

const userController = {
  // Handler for the signup form submission
  async signup(req, res) {
    try {
      // Create a new user in the database
      await User.create(req.body);

      // Redirect to the login page
      res.redirect('/login');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  // Handler for the login form submission
  async login(req, res) {
    try {
      // Perform user authentication
      // ... (authenticate user credentials)

      // Set the logged_in session variable
      req.session.logged_in = true;
      req.session.userId = user.id;

      // Redirect to the dashboard
      res.redirect('/dashboard');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to authenticate user' });
    }
  },

  // Handler for the logout route
  logout(req, res) {
    // Destroy the session and redirect to the homepage
    req.session.destroy(() => {
      res.redirect('/');
    });
  },
};

module.exports = userController;
