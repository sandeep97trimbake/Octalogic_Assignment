const mysql = require("mysql");
const dbconfig = require("./dbconfig");


const connectionpool = {
    pool: null,
    init: function () {

        this.pool = mysql.createConnection(dbconfig)
        console.log("Connection Pool Initialized")
    },

    getconnection: function () {
        return this.pool
    }
}

module.exports = connectionpool;