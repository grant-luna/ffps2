const express = require('express');
const app = express();

app.set('views', ['./views', './views/components']);
app.set('view engine', 'pug');

app.use(express.static('public'));

const morgan = require('morgan');
app.use(morgan('common'));

const { check, validationResult } = require('express-validator');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (request, response) => {
  response.render('searches');
});

app.listen(3000, 'localhost', () => {
  console.log('Listening on Port 3000');
});

