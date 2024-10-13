const Home = require("../models/Home.js");
const MessageResponse = require('../utils/message_response')
const messageResponse = new MessageResponse();

exports.getAllSpace = (req, res, next) => {
  res.status(200).json(HomeModel.getAllSpace());
};

exports.addSpace = (req, res) => {
  try {
    const model =new Home();
    model.copyProperties(req.body)
    model.save(res)
  } catch (error) {
    messageResponse.error_details(res,error)
  }
};

exports.updateSpace=(req,res)=>{
  try {
    const model = new Home()
    model.update(req.body)
    messageResponse.success(res)
  } catch (error) {
    messageResponse.error_details(res,error)
  }
}

exports.getSpaceById = (req, res) => {
  new Home().findDataById(res,req.body.id);
};
