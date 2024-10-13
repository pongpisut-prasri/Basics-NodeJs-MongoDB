module.exports = class BaseEntity {
  constructor(createDate, createBy, updateDate, updateBy) {
    this.createDate = createDate;
    this.createBy = createBy;
    this.updateDate = updateDate;
    this.updateBy = updateBy;
    this.id = id;
  }

  setCreateDate(createDate) {
    this.createDate = createDate;
  }

  setCreateBy(createBy) {
    this.createBy = createBy;
  }

  setUpdateDate(updateDate) {
    this.updateDate = updateDate;
  }

  setUpdateBy(updateBy) {
    this.updateBy = updateBy;
  }
}
