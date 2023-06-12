const router = require('express').Router();

// Import the necessary controllers
const {
  getDashboard,
  getNewPostForm,
  createNewPost,
  getEditPostForm,
  updatePost,
  deletePost
} = require('../controllers/dashboardController');

// Define the routes
router.get('/', (req, res) => {
  getDashboard(req, res);
});

router.get('/new', (req, res) => {
  getNewPostForm(req, res);
});

router.post('/new', (req, res) => {
  createNewPost(req, res);
});

router.get('/:id/edit', (req, res) => {
  getEditPostForm(req, res);
});

router.put('/:id/edit', (req, res) => {
  updatePost(req, res);
});

router.delete('/:id/delete', (req, res) => {
  deletePost(req, res);
});

module.exports = router;
