// homeRoutes.js

const router = require('express').Router();
const { homepage } = require('../controllers/homeController');

// Homepage route
router.get('/', homepage);

module.exports = router;
