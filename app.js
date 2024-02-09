const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Hello world!\n');
});

app.listen(3000, 'localhost', () => {
  console.log('Listening on port 3000');
});