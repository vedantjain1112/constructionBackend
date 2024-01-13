const Testimonial = require("../models/testimonialModel");

const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    console.error("Error getting testimonials:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addTestimonial = async (req, res) => {
  try {
    const { name, role, review, rating, reviewDate } = req.body;

    const newTestimonial = new Testimonial({
      name,
      role,
      review,
      rating,
      reviewDate,
      image: req.file.filename,
    });

    await newTestimonial.save();
    res.json({ message: "Testimonial added successfully" });
  } catch (error) {
    console.error("Error adding testimonial:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllTestimonials, addTestimonial };
