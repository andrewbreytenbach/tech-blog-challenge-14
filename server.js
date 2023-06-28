const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Serve static files from the public directory
app.use(express.static('public'));

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


// Set up session middleware
app.use(session(sess));

// Inform Express.js on which template engine to use
// Set the view engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  extname: 'handlebars',
}));
app.set('view engine', 'handlebars');

// Define a route handler for "/login"
app.get('/login', (req, res) => {
  res.render('loginForm'); 
});

// Define a route handler for "/signup"
app.get('/signup', (req, res) => {
  res.render('signupForm'); 
});

app.post('/signup', (req, res) => {
  // Retrieve user data from the request body
  const { email, password } = req.body;

  // Perform necessary operations to create a new user
  // ...

  // Example authentication logic
  const authenticated = true; // Replace this with your actual authentication logic

  // Example response based on authentication result
  if (authenticated) {
    res.redirect('/dashboard'); // Redirect to the dashboard page on successful signup
  } else {
    res.status(401).send('Failed to sign up. Please try again.'); // Return an error message on signup failure
  }
});

app.post('/login', (req, res) => {
  // Retrieve the email and password from the request body
  const { email, password } = req.body;

  // Perform authentication logic
  // ...

  // Example authentication logic
  const authenticated = true; // Replace this with your actual authentication logic

  // Example response based on authentication result
  if (authenticated) {
    res.redirect('/dashboard'); // Redirect to the dashboard page on successful login
  } else {
    res.status(401).send('Invalid email or password'); // Return an error message on login failure
  }
});


// Set up static file serving and body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
});
