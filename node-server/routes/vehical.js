var express = require('express');
var router = express.Router();
const connectionPool = require("../DBConfig/connectionpool")
const vehicalRepo = require("./../DBConfig/vehicalRepo")

const repo =new vehicalRepo(connectionPool);


/* GET vehical by type. */
router.get("/type/:type", function(req, res) {
    repo.getVehicalByType(req.params.type,(err,result) => {
        err ? res.status(500).json({error : err.toString()})
            : res.status(302).json(result);
    });
});

module.exports = router;
