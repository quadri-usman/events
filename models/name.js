const uuid = require("uuid");
const mongoose = require("mongoose");

const nameSchema = mongoose.Schema(
  {
    title: {
      type: String,
      allowNull: false,
    },
    description: {
      type: String,
    },

    location: {
      type: String,
    },
    date: {
      type: String,
      allowNull: false,
    },
    time: {
      type: String,
      allowNull: false,
    },
    thumbnail: {
      type: String,
      comment: "URL to the thumbnail",
    },
    group: {
      type: String,
    },
  },
  {
    tableName: "events",
    modelName: "events",
  }
);

module.exports = mongoose.model("Name", nameSchema);
