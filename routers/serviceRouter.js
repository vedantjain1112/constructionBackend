const express = require("express");
const router = express.Router();
const multer = require("multer");
const serviceController = require("../controllers/serviceController");

const serviceImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/services/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const serviceImageUpload = multer({ storage: serviceImageStorage });

router.get("/", serviceController.getServices);
router.post(
  "/add",
  serviceImageUpload.single("image"),
  serviceController.addService
);

module.exports = router;
