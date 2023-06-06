const router = require('express').Router();
const { Post, User, Comment } = require('../db/models');

// Home page route
router.get('/', async (req, res) => {
  try {
    // Fetch all blog posts with associated user information
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize the post data
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the home page view with the post data
    res.render('home', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Other routes...

module.exports = router;
