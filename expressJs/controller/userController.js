const Home = require("../collection/Home.js");
const HomeModel = require("../models/homeModel.js");

exports.getAllSpace = (req, res, next) => {
  res.status(200).json(HomeModel.getAllSpace());
};

exports.addSpace = (req, res) => {
  try {
    console.log("req ",req.body);
    
    const model =new Home(req?.body?.spaceName);
    model.save()
    res.status(200).json({
      message: "success",
    });
  
  } catch (error) {
    res.status(400).send(error.message)
  }
};

exports.getSpaceById = (req, res) => {
  const allSpace = HomeModel.getAllSpace();
  res.status(200).json(allSpace?.filter((o) => o?.id === req?.body?.id)?.[0] || {});
};
