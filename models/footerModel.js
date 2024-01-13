const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  instagram: { type: String },
  linkedin: { type: String },
  facebook: { type: String },
  whatsapp: { type: String },
});

const Footer = mongoose.model("Footer", footerSchema);

module.exports = Footer;
