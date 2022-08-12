const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const { urlencoded } = require('body-parser');

const movies = require('./api/routes/movies');
const users = require('./api/routes/user');

const mongoose = reuqire('./config/database');

var jwt = require('jsonwebtoken');

app.set('secretKey', 'nodeRestApi');

mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error')
);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extends: false }));

app.get('/', (req, res) => {
  res.json({ tuto: 'building api with nodejs' });
});

app.use('/users', users);

app.use('/movies', validateUser, movies);

function validateUser(req, res, next) {
  jwt.verify(
    req.headers['x-access-token'],
    req.app.get('secretKey'),

    function (err, decoded) {
      if (err) {
        res.json({ status: 'error', message: err.message, data: null });
      } else {
        re.body.userId = decoded.id;
        next();
      }
    }
  );
}

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.log(err);

  if (err.sstatus === 404) {
    res.status(404).json({ message: 'not found' });
  } else {
    res.status(500).json({ message: 'something looks wrong' });
  }
});

app.listen(3000, () => {
  console.log(`server is runngin on port {3000}`);
});
