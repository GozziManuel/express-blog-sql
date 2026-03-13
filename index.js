console.log("Listening on watch");
const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/routers");
const ErrorCalibrator = require("./middlewares/ErrorCalibrator");
const notFound = require("./middlewares/notFound404");

// Index route
app.get("/", (req, res) => {
  res.json({
    result: "blog",
  });
});

// Public folder & json translate
app.use(express.static("public"));
app.use(express.json());

// Routers
app.use("/posts", postsRouter);

// Error Calibrator
app.use(ErrorCalibrator);
app.use(notFound);

app.listen(port, () => {});
