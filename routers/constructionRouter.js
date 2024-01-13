const express = require("express");
const router = express.Router();
const constructionController = require("../controllers/constructionController");

router.get("/", constructionController.getConstructionContent);

module.exports = router;
