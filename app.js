const express = require('express');
const app = express();

app.set('views', ['./views', './views/components']);
app.set('view engine', 'pug');

app.listen(3000, 'localhost', () => {
  console.log('Listening on Port 3000');
});

