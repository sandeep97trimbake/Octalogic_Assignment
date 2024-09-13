var express = require('express');
var router = express.Router();
const connectionPool = require("../DBConfig/connectionpool")
const vehicalRepo = require("./../DBConfig/vehicalRepo")

const repo =new vehicalRepo(connectionPool);

/* GET vehical by type. */
router.get('/:id', function(req, res, next) {
    console.log("ID : " , req.params.id);
    res.sendStatus(200)
  res.send('get vehical');
});

/* GET vehical by type. */
router.get('/:type', function(req, res, next) {
    console.log("ID : " , req.params.type);
    res.sendStatus(200)
  res.send('get vehical');
});

module.exports = router;
