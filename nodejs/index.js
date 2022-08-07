const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const { urlencoded } = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extends: false }));

app.get('/', (req, res) => {
  res.json({ tuto: 'building api with nodejs' });
});

app.listen(3000, () => {
  console.log(`server is runngin on port {3000}`);
});
