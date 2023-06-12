const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Route to create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to log in an existing user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to log out the current user
router.post('/logout', withAuth, async (req, res) => {
  try {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to get user information
router.get('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id.' });
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
