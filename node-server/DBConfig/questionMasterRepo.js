class questionMasterRepo{
    constructor(connectionPool){
        this.connectionPool=connectionPool
    }

    get pool(){
        return this.connectionPool.getpool();
    }

    getAll(callback){
        this.pool.query("Select * from questionmaster",callback)

    }
}
module.exports = questionMasterRepo;