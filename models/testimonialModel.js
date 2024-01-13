const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  reviewDate: { type: Date, required: true },
  image: { type: String, required: true },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
