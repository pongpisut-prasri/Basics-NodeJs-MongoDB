const BaseEntity = require("./BaseEntity");
const { ObjectId } = require("mongodb");
const getDb = require("../utils/database_connector").getDb;
class Home {
  constructor(spaceName, createDate, createBy, updateDate, updateBy) {
    this.spaceName = spaceName;
    this.createDate = createDate;
    this.createBy = createBy;
    this.updateDate = updateDate;
    this.updateBy = updateBy;
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
      const response = await db
        .collection("homeSpace")
        .findOne({ _id: ObjectId.createFromHexString(id) });

      res.status(200).json(response);
    } catch (error) {
      console.log("error ", error);
    }
  }

  async update(request) {
    const db = getDb();
    try {
      await db.collection("homeSpace").updateOne(
        { _id: ObjectId.createFromHexString(request.id) },
        {
          $set: {
            spaceName:request.spaceName,
            updateDate: new Date(),
            updateBy: "MAN",
          },
        }
      );
    } catch (error) {}
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
