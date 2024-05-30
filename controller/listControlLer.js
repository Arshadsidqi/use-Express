const LIST_SCHEMA = require("../models/list");

// create list
exports.createList = async (req, res) => {
  let payload = {
    title: req.body.title.trim(),
    description: req.body.description.trim(),
  };
  if (!payload.title || !payload.description) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }
  try {
    await LIST_SCHEMA.create(payload);
    res.status(201).json({
      message: "list ",
      data: payload,
    });
  } catch (err) {
    console.log(err);
  }
};
//fatching lists

exports.fatchLists = async (req, res) => {
  try {
    let payload = await LIST_SCHEMA.find();
    if (!payload) {
      return res.status(400).send({ message: "data not found" });
    }
    res.status(201).send({ message: "data fetched successfully", payload });
  } catch (err) {
    res.send("error occured");
  }
};
// single list
exports.fetchOne = async (req, res) => {
  try {
    console.log(req.params);
    let id = req.params.id;
    if (!id) {
      return res.status(400).send({ message: "data not found" });
    }
    let payload = await LIST_SCHEMA.findOne({ _id: id });
    res.status(201).send({ message: "data fetched successfully", payload });
  } catch (err) {
    res.send(err);
  }
};
// update list
exports.updateList = async (req, res) => {
  try {
    let id = req.params.id;
    await LIST_SCHEMA.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title.trim(),
          description: req.body.description.trim(),
        },
      }
    );
  } catch (err) {
    res.send(err);
  }
};

// delete list item
exports.deleteListItem = async (req, res) => {
  try {
    let id = req.params.id;
    await LIST_SCHEMA.deleteListItem({ _id: id });
    res.status(201).send({ message: "delete list item successfully" });
  } catch (err) {
    res.send(err);
  }
};
