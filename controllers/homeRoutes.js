const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// Route for the homepage
router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});

// Route for user signup
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user dashboard and their posts
router.get('/post', withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: [
        { model: Post },
      ],
    });
    const userData = user.get({ plain: true });
    res.render('dashboard', {
      ...userData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for user login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to another route
  if (req.session.logged_in) {
    res.redirect('/api/posts');
    return;
  }
  res.render('login', {
    is_login: true
  });
});

// Route for user signup
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to another route
  if (req.session.logged_in) {
    res.redirect('/api/posts');
    return;
  }
  res.render('login', {
    is_login: false
  });
});

module.exports = router;
