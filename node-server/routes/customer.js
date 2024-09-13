var express = require('express');
var router = express.Router();
const connectionPool = require("../DBConfig/connectionpool");
const CustomerRepo = require("../DBConfig/customerRepo");


const repo = new CustomerRepo(connectionPool);

/* GET customer listing. */
router.get('/', function (req, res, next) {
    res.send('get customer');
});

// Add Customer
router.post("/add", function (req, res){
    repo.save(req.body, (err) => {
        err ? res.status(500).json({ error: err.toString() })
            : res.sendStatus(200);
    });
})

module.exports = router;
