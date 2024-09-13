class cutomerRepo {

    constructor(connectionPool) {
        this.connectionPool = connectionPool

    }

    get pool(){
        return this.connectionPool.getpool();
    }

    save(cutomer, callback) {
        this.pool.query("insert into customer set ?", cutomer, callback)
    }
}

module.exports = cutomerRepo;