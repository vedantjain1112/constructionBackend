const express = require("express");
const router = express.Router();
const { getSocialMediaLinks } = require("../controllers/footerController");

router.get("/", getSocialMediaLinks);

module.exports = router;
