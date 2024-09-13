const mysql = require("mysql");
const dbconfig = require("../DBConfig/dbconfig");


const connectionPool = {
    pool: null,
    init: function () {

        this.pool = mysql.createPool(dbconfig);

        console.log("Connection Pool Initialized")
    },

    getpool: function () {
        console.log("Get Pool")
        return this.pool;
    }
}

module.exports = connectionPool;