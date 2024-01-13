const express = require("express");
const multer = require("multer");
const {
  getAllTestimonials,
  addTestimonial,
} = require("../controllers/testimonialController");

const testimonialRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

testimonialRouter.get("/", getAllTestimonials);
testimonialRouter.post("/", upload.single("image"), addTestimonial);

module.exports = testimonialRouter;
