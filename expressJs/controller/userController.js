const space = [
  {
    id: 1,
    spaceName: "bathroom",
  },
  {
    id: 2,
    spaceName: "bedroom",
  },
];

exports.getAllSpace = (req, res, next) => {
  res.json(space);
};

exports.addSpace = (req, res) => {
  space.push({
    spaceName: req.body.spaceName,
    id: req.body.id,
  });
  res.status(200).json({
    message: "success",
  });
  res.redirect("/");
};

exports.getSpaceById = (req, res) => {
  const response = space?.filter((o) => o.id === req.body.id)[0] || {};
  if (response?.id) {
    res.status(200).json(response);
  } else {
    res.status(400).send("id not found");
  }
};
