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

    getVehicalByTypeAndCatagory(type,catagory,callback){
        var query = `Select * from vehicle where type =  ${type} and category =  ${catagory}`
        this.pool.query(query,callback)
    }
}

module.exports = vehicalRepo;