class cutomerRepo {

    constructor(connectionPool) {
        this.connectionPool = connectionPool;

    }

    save(cutomer, callback) {
        this.connectionPool.getPool().query("insert into customer set ?", cutomer, callback)
    }
}

module.exports = cutomerRepo;