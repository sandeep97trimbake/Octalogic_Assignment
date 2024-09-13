var express = require('express');
var router = express.Router();

/* GET booking listing. */
router.get('/', function(req, res, next) {
  res.send('get booking');
});

module.exports = router;
