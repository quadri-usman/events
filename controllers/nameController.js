const Name = require("../models/name");
const { v4: uuid } = require("uuid");

// create new Name
exports.addName = async (req, res) => {
  try {
    // const moment = require("moment");

    const name = new Name({
      id: uuid(),
      title: req.body.title,
      description: req.body.description,
      creator: uuid(),
      location: req.body.location,
      group: req.body.group,
      thumbnail: req.body.thumbnail,
      date: req.body.date,
      time: req.body.time,
    });

    // Save Name in the database
    name.save().then((newName) => {
      res.send(newName);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all names
exports.getNames = async (req, res) => {
  try {
    Name.find().then((names) => {
      res.send(names);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// // get single name
// exports.getName = async (req, res) => {
//   try {
//     Name.findById(req.params.id).then((name) => {
//       if (!name) {
//         return res.status(404).send({
//           message: "Name not found with id " + req.params.id,
//         });
//       }
//       res.send(name);
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// update / edit name
// exports.updateName = async (req, res) => {
//   try {
//     Name.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//       },
//       { new: true }
//     ).then((name) => {
//       if (!name) {
//         return res.status(404).send({
//           message: "Name not found with id " + req.params.id,
//         });
//       }
//       res.send({ message: "Name updated successfully!", name });
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// delete name
// exports.deleteName = async (req, res) => {
//   try {
//     Name.findByIdAndRemove(req.params.id).then((name) => {
//       if (!name) {
//         return res.status(404).send({
//           message: "Name not found with id " + req.params.id,
//         });
//       }
//       res.send({ message: "Name deleted successfully!", name });
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
