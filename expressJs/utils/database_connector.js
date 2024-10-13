const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnection = callback =>{
    MongoClient.connect('mongodb://localhost:27017/home').then(client=>{
        console.log("Connected MongoDb");
        _db=client.db()
        callback(client)
    }).catch(err=>{
        console.log("error cause by ",err);
        
    })
}

const getDb =()=>{
    if (_db) {
        return _db
    }
    throw 'No database found!'
}
exports.mongoConnection = mongoConnection
exports.getDb = getDb