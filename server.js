// Required dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3005;

// Clear the cache for the mainLayout.handlebars file
delete require.cache[require.resolve('./app/views/layouts/mainLayout.handlebars')];

// Set up Handlebars as the view engine
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'mainLayout',
    extname: '.handlebars',
    layoutsDir: path.join(__dirname, 'app/views/layouts'),
    partialsDir: path.join(__dirname, 'app/views/partials')
  })
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'app/views'));

// Middleware
// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'app/public')));

// Routes
// Import and mount routes for authentication-related functionality
const authenticationRoutes = require('./app/routes/authenticationRoutes');
app.use('/auth', authenticationRoutes);

// Import and mount routes for blog-related functionality
const blogRoutes = require('./app/routes/blogRoutes');
app.use('/blog', blogRoutes);

// Import and mount routes for dashboard-related functionality
const dashboardRoutes = require('./app/routes/dashboardRoutes');
app.use('/dashboard', dashboardRoutes);

// Import and mount routes for the homepage
const homeRoutes = require('./app/routes/homeRoutes');
app.use('/', homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
