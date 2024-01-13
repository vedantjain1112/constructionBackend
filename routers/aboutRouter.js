const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

router.get("/", aboutController.getAboutContent);
router.post("/", aboutController.createAboutContent);

module.exports = router;
