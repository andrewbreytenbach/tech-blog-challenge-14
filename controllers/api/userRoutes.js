const router = require('express').Router();
const { User } = require('../../models');

// Route for user signup
router.post('/signup', async (req, res) => {
  try {
    // Create a new user with the provided data
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      req.session.logged_in = true;
      res.status(200).json(user);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user logout
router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
    // Destroy the user session and log them out
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Find the user with the provided email
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      // If no user is found, return an error response
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Check if the provided password matches the user's password
    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      // If the password is incorrect, return an error response
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      // Save the user session and log them in
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      req.session.logged_in = true;
      res.redirect('/api/posts');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
