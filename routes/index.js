const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api/index'); // Adjusted import path

// Home routes
router.use('/', homeRoutes);

// Dashboard routes
router.use('/dashboard', dashboardRoutes);

// API routes
router.use('/api', apiRoutes);

module.exports = router;
