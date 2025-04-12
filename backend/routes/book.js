const express = require('express');
const router = express.Router();
const { bookTicket } = require('../controllers/bookController');

router.post('/', bookTicket);

module.exports = router;