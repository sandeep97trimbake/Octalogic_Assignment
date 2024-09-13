var express = require('express');
var router = express.Router();
const connectionPool = require("../DBConfig/connectionpool")
const vehicalRepo = require("./../DBConfig/vehicalRepo")

const repo =new vehicalRepo(connectionPool);


/* GET vehical by type. */
router.get("/type/:type", function(req, res) {
    repo.getVehicalByType(req.params.type,(err,result) => {
        err ? res.status(500).json({error : err.toString()})
            : res.status(200).json(result);
    });
});

router.get("/catagory/:type/:catagory", function(req, res) {
    repo.getVehicalByTypeAndCatagory(req.params.type,req.params.catagory,(err,result) => {
        err ? res.status(500).json({error : err.toString()})
            : res.status(200).json(result);
    });
});

module.exports = router;
