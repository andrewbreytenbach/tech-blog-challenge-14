const router = require('express').Router();
// Import the Comment model from the '../../models' directory
const { Comment } = require('../../models');

// Route for rendering the comment form
router.get('/', async (req, res) => {
  res.render('comment');
});

// Route for creating a new comment
router.post('/', async (req, res) => {
  try {
    // Create a new comment using the data from the request body
    const comment = await Comment.create(req.body);
    // Respond with the created comment data
    res.status(200).json(comment);
  } catch (err) {
    // Handle any errors that occur during comment creation
    res.status(500).json(err);
  }
});

module.exports = router;
