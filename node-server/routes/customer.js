var express = require('express');
var router = express.Router();

/* GET customer listing. */
router.get('/', function(req, res, next) {
  res.send('get customer');
});

module.exports = router;
