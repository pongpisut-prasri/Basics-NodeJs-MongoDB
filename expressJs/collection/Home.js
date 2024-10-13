const BaseEntity = require("./BaseEntity");
const { ObjectId } = require("mongodb");
const getDb = require("../utils/database_connector").getDb;
class Home {
  constructor(spaceName, createDate, createBy) {
    this.spaceName = spaceName;
    this.createDate = createDate;
    this.createBy = createBy;
  }

  save(res) {
    const db = getDb();
    db.collection("homeSpace")
      .insertOne(this)
      .then((result) => {
        console.log("success ", result);
        res.status(200).json({
          message: "create successfully!",
          data: this,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: error,
        });
        console.log("error cause by ", error);
      });
  }

  async findDataById(res, id) {
    const db = getDb();
    try {
      console.log("id", ObjectId.createFromHexString(id));

      const response = await db
        .collection("homeSpace")
        .findOne({ _id: ObjectId.createFromHexString(id) });
      res.status(200).json(response);
    } catch (error) {
      console.log("error ", error);
    }
  }

  copyProperties(source) {
    const { spaceName, createDate, createBy } = source;
    this.spaceName = spaceName;
    if (!source.id) {
      this.createDate = new Date();
      this.createBy = "MAN";
    }
  }
}
module.exports = Home;
