const BaseEntity = require("./BaseEntity");
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
