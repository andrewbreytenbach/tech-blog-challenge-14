const router = require('express').Router();

// Importing the API routes module
const apiRoutes = require('./api');
// Importing the homeRoutes module
const homeRoutes = require('./homeRoutes');

// Routes for the home page and related functionality
router.use('/', homeRoutes);
// Routes for the API endpoints
router.use('/api', apiRoutes);

// Exporting the router module
module.exports = router;
