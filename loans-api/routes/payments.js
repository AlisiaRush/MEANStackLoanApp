var express = require('express');
var router = express.Router();

const paymentsModel = require('../models/payments.model');

/* GET payments */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
