require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const connectDB = require("./database/dbConnect");
const testimonialRouter = require("./routers/testimonialRouter");
const aboutRouter = require("./routers/aboutRouter");
const serviceRouter = require("./routers/serviceRouter");
const constructionRouter = require("./routers/constructionRouter");
const footerRouter = require("./routers/footerRouter");

const app = express();
const PORT = process.env.PORT || 4010;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/testimonials", testimonialRouter);
app.use("/about", aboutRouter);
app.use("/services", serviceRouter);
app.use("/construction", constructionRouter);
app.use("/footer", footerRouter);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const serviceImageUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/services/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

app.post("/uploads", upload.single("image"), (req, res) => {
  res.json({ filename: req.file.filename });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/about/uploads", upload.single("image"), (req, res) => {
  res.json({ filename: req.file.filename });
});

app.use("/about/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/services/upload", serviceImageUpload.single("image"), (req, res) => {
  res.json({ imagePath: req.file.path });
});

app.use(
  "/services/uploads",
  express.static(path.join(__dirname, "uploads/services"))
);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
