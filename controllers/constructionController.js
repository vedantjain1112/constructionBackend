const Construction = require("../models/constructionModel");

const getConstructionContent = async (req, res) => {
  try {
    const constructionContent = await Construction.findOne();
    res.json(constructionContent);
  } catch (error) {
    console.error("Error fetching construction content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getConstructionContent };
