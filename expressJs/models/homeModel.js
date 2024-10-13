const BaseModel = require("./baseModel");

const space = [];

module.exports = class HomeModel extends BaseModel {

    // * AllArgsContructor
  constructor(spaceName, id) {
    super(id); // * super must before normal
    this.spaceName = spaceName;
  }

  getSpaceName() {
    return this.spaceName;
  }

  save() {
    space.push(this);
  }

  static getAllSpace() {
    return space;
  }
};
