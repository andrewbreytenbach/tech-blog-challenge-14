// Import the Router function from the Express package
const router = require('express').Router();
// Import the User model from the models directory
const { User } = require('../models');
// Import the withAuth middleware from the utils directory
const withAuth = require('../utils/auth');
// Import the bcrypt module for password hashing
const bcrypt = require('bcrypt');

// Define a GET route for the root path '/'
router.get('/', withAuth, (req, res) => {
  // Render the dashboard template when the user is authenticated
  res.render('dashboard', {
    title: 'Dashboard',
    logged_in: req.session.logged_in
  });
});

// Define a GET route for the '/dashboard' path
router.get('/dashboard', withAuth, (req, res) => {
  // Get the username from the session
  const username = req.session.username;
  // Render the dashboard template with the username and authentication status
  res.render('dashboard', {
    title: 'Dashboard',
    logged_in: req.session.logged_in,
    username: username
  });
});

// Define a GET route for the '/login' path
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // Render the login form
  res.render('partials/login', { title: 'Login' });
});

// Define a GET route for the '/signup' path
router.get('/signup', (req, res) => {
  // Render the login form with no errors
  res.render('partials/login', {
    errors: null
  });
});

// Define a POST route for the '/signup' path
router.post('/signup', async (req, res) => {
  // Extract name, email, and password from the request body
  const { name, email, password } = req.body;
  // Define an empty array to store any errors
  const errors = [];
  try {
    // If any field is missing, push an error message to the array
    if (!name || !email || !password) {
      errors.push("Please enter all fields");
      // Render the login form with the errors
      res.render('partials/login', { errors: errors });
      return;
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      errors.push("User already exists");
      // Render the login form with the errors
      res.render('partials/login', { errors: errors });
      return;
    }

    // Create a new user with the given data
    const newUser = await User.create({ name, email, password });

    // Set the session variables for authentication
    req.session.logged_in = true;
    req.session.user_id = newUser.id;
    req.session.username = newUser.name;

    // Redirect to the dashboard
    res.render('dashboard', {
      title: 'Dashboard',
      logged_in: true
    });

  } catch (error) {
    // Show the error message on the login page
    const errors = error.errors.map(err => err.message);
    res.render('partials/login', {
      errors: errors
    });
  }
});

// Define a POST route for the '/login' path
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Find the user with the provided email
  const user = await User.findOne({ where: { email } });
  if (!user) {
    // Render the login form with an error message if the user does not exist
    res.render('partials/login', {
      errors: [{ message: 'User credentials are incorrect' }]
    });
    return;
  }
  // Compare the provided password with the hashed password stored in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    // Render the login form with an error message if the password is incorrect
    res.render('partials/login', {
      errors: [{ message: 'User credentials are incorrect' }]
    });
    return;
  }

  // Set the session variables for authentication
  req.session.logged_in = true;
  req.session.user_id = user.id;
  req.session.username = user.name;

  // Redirect to the dashboard
  res.redirect('/dashboard');
});

// Define a GET route for the '/logout' path
router.get('/logout', (req, res) => {
  // Destroy the session and redirect to the login page
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// Define a GET route for the '/about' path
router.get('/about', withAuth, (req, res) => {
  // Render the about template when the user is authenticated
  res.render('about', {
    title: 'About',
    logged_in: req.session.logged_in
  });
});

// Define a GET route for the '/savedPlaylist' path
router.get('/savedPlaylist', withAuth, (req, res) => {
  // Render the savedPlaylist template when the user is authenticated
  res.render('savedPlaylist', {
    title: 'Saved Playlist',
    logged_in: req.session.logged_in
  });
});

// Export the router object to be used by other modules
module.exports = router;
