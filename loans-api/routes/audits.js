var express = require('express');
var router = express.Router();

const auditsModel = require('../models/audits.model');

/* GET audit */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
