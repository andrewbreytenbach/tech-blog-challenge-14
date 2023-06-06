const router = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

// Route for creating a new user
router.post('/', async (req, res) => {
  try {
    // Hash the user's password before storing it
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });

    // Set the session to indicate the user is logged in
    req.session.loggedIn = true;
    req.session.userId = newUser.id;
    req.session.username = newUser.username;

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Other user routes...

module.exports = router;
