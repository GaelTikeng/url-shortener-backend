const mongoose = require("../db");
const Schema = mongoose.Schema;

// new model
const urlSchema = new Schema(
  {
    original_url: String,
    short_url: Number,
  },
  {
    versionKey: false,
  }
);

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
