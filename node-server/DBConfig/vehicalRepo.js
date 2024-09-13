class vehicalRepo{
    constructor(connectionPool){
        this.connectionPool=connectionPool
    }

    get pool(){
        return this.connectionPool.getpool();
    }

    getVehicalByType(type,callback){
        this.pool.query("Select * from vehicle where type = ?",type,callback);
    }
}

module.exports = vehicalRepo;