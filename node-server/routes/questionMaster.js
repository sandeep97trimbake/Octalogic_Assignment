var express = require('express');
var router = express.Router();
const connectionPool = require("../DBConfig/connectionpool")
const questionMasterRepo = require("./../DBConfig/questionMasterRepo")

const repo =new questionMasterRepo(connectionPool);


/* GET questions. */
router.get("/", function(req, res) {
    repo.getAll((err,result) => {
        err ? res.status(500).json({error : err.toString()})
            : res.status(200).json(result);
    });
});

module.exports = router;
