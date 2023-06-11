const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const handlebars = require('handlebars');


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3006;

// Register the "layout" helper
handlebars.registerHelper('layout', function (options) {
  // Implement the logic to render the layout
});

// Register the "get" helper
handlebars.registerHelper('get', function (context, options) {
  return options.fn(context);
});

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
