const Service = require("../models/serviceModel");

const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addService = async (req, res) => {
  try {
    const { title, text } = req.body;
    const imagePath = req.file ? req.file.path : "";

    const newService = new Service({
      title,
      image: imagePath,
      text,
    });

    await newService.save();
    res.status(201).json({ message: "Service added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getServices, addService };
