const mongoose = require("mongoose");

const constructionSchema = new mongoose.Schema({
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
  spanTagContent: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Construction = mongoose.model("Construction", constructionSchema);

module.exports = Construction;
