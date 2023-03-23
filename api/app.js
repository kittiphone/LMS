const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const connection = require("./models/database.utils");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use(cors());
app.use(bodyParser.json());



app.use("/user", userRoutes);
app.use("/profile", profileRoutes);
app.use("/course", courseRoutes);

connection.connect((err) => {
  if (err) {
    console.error("Failed to connect to database.");
    throw err;
  } else {
    console.log("Connected to database!");
  }
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});

module.exports = app;
