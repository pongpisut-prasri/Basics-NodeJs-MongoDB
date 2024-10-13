MongoDB connection

const mongoConnection = callback =>{
    MongoClient.connect('mongodb://localhost:27017/home').then(client=>{
        console.log("Connected MongoDb");
        _db=client.db()
        callback(client)
    }).catch(err=>{
        console.log("error cause by ",err);
        
    })
}

home คือชื่อ database ที่สร้าง

const getDb = require("../utils/database_connector").getDb;

class Home{
  constructor(spaceName) {
    this.spaceName = spaceName;
  }

  save() {
    const db = getDb();
    db.collection("homeSpace").insertOne(this).then((result)=>{
        console.log("success ",result);
    }).catch((error)=>{
        console.log("error cause by ",error);
    });
  }



};
module.exports = Home

getDb เป็น function ที่ใช้สำหรับการเอา database connection มาใช้ collection คือชื่อ table ที่ต้องการ insert ข้อมูล

