// Configure and initialize express instance
const express = require('express');
const app = express();

// Configure view engine
app.set('views', ['./views', './views/components']);
app.set('view engine', 'pug');

// Configure statis assets
app.use(express.static('public'));

// Logging Configuration (morgan)
const morgan = require('morgan');
app.use(morgan('common'));

// Validation Configuration (express-validator)
const { check, validationResult } = require('express-validator');

// Session Configuration
const pg = require('pg');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

const pgPool = new pg.Pool({
  database: 'ffps2',
  max: 20,
});

app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    path: '/',
    secure: false,
  },
  store: new pgSession({
    pool: pgPool,
    tableName: 'session'
  }),
  name: 'faster-fast-people-search-session-id',
  secret: 'Session Secret',
  resave: false,
  saveUninitialized: true,
}));

// Request Body Parsing Configuration
app.use(express.json());
app.use(express.urlencoded());

// Route Handlers
app.get('/', (request, response) => {
  response.render('searches');
});

app.listen(3000, 'localhost', () => {
  console.log('Listening on Port 3000');
});

