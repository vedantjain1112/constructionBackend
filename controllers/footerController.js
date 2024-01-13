const Footer = require("../models/footerModel");

const getSocialMediaLinks = async (req, res) => {
  try {
    const footerData = await Footer.findOne();
    res.json(footerData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getSocialMediaLinks };
