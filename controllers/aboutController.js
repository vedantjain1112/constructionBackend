const About = require("../models/aboutModel");
const { JSDOM } = require("jsdom");

const getAboutContent = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about || { content: "", imagePath: "" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createAboutContent = async (req, res) => {
  const { content, imagePath } = req.body;

  try {
    const newAbout = new About({ content, imagePath });
    await newAbout.save();
    res.json(newAbout);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAboutContent, createAboutContent };
