var express = require('express');
var router = express.Router();
const connectionPool = require("../DBConfig/connectionpool")

/* GET vehical by type. */
router.get('/:id', function(req, res, next) {
    console.log("ID : " , req.params.id);
    res.sendStatus(200)


  res.send('get vehical');
});

module.exports = router;
