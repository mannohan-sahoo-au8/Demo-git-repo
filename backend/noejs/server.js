const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require('./routes/user');
require('./config/db');

app.use(bodyParser.json(urlencoded({ extended: false })));

app.get('/', (req, res) => {
  res.json({ message: 'Health Check OK' });
});

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
