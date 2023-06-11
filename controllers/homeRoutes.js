const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');

router.get('/', withAuth, (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    logged_in: req.session.logged_in
  });
});

router.get('/dashboard', withAuth, (req, res) => {
  const username = req.session.username;
  res.render('dashboard', {
    title: 'Dashboard',
    logged_in: req.session.logged_in,
    username: username
  });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('partials/login', { title: 'Login' });
});

router.get('/signup', (req, res) => {
  res.render('partials/login', {
    errors: null
  });
});

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const errors = [];
  try {
    if (!name || !email || !password) {
      errors.push('Please enter all fields');
      res.render('partials/login', { errors });
      return;
    }

    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      errors.push('User already exists');
      res.render('partials/login', { errors });
      return;
    }

    const newUser = await User.create({ name, email, password });

    res.render('dashboard', {
      title: 'Dashboard',
      logged_in: true
    });

  } catch (error) {
    const errors = error && error.errors ? error.errors.map(err => err.message) : [];

    res.render('partials/login', {
      errors
    });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    res.render('partials/login', {
      error: 'User credentials are incorrect'
    });
    return;
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.render('partials/login', {
      error: 'User credentials are incorrect'
    });
    return;
  }

  req.session.logged_in = true;
  req.session.user_id = user.id;
  req.session.username = user.name;

  res.redirect('/dashboard');
});

router.get('/logout', (req, res) => {
  req.session.logged_in = false;
  res.redirect('/login');
});

module.exports = router;
