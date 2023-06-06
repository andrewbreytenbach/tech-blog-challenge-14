const router = require('express').Router();
const { Post, User, Comment } = require('../../db/models');

// Route for creating a new blog post
router.post('/', async (req, res) => {
  try {
    // Create a new blog post in the database
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.userId, // Associate the post with the logged-in user
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for updating a blog post
router.put('/:id', async (req, res) => {
  try {
    // Update the blog post in the database
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          userId: req.session.userId, // Ensure the post belongs to the logged-in user
        },
      }
    );

    if (!updatedPost[0]) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Other blog routes...

module.exports = router;
