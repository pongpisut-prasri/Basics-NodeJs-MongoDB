const HomeModel = require("../models/homeModel.js");

exports.getAllSpace = (req, res, next) => {
  res.status(200).json(HomeModel.getAllSpace());
};

exports.addSpace = (req, res) => {
  try {
    const model = new HomeModel(req?.body?.spaceName, req?.body?.id);
    model.save();
    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    res.status(400).send("error cause by ", error);
  }
};

exports.getSpaceById = (req, res) => {
  const allSpace = HomeModel.getAllSpace();
  res.status(200).json(allSpace?.filter((o) => o?.id === req?.body?.id)?.[0] || {});
};
