const express = require('express');
const router = express.Router();
const userCcntroller = require('../controllers/user');

router.post('/register', userCcntroller.create);
router.post('/authenticate', userCcntroller.authenticate);

module.exports = router;
