const express = require('express');
const router = express.Router();

// POST /api/users/logout
router.post('/api/users/logout', (req, res) => {
  // Clear the user session to log out
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    // Redirect the user to the home page or any other desired page after logout
    res.redirect('/');
  });
});

module.exports = router;
