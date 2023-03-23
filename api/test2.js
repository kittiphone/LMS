const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const connection = require("./models/database.utils");

app.use(cors());

// Import userController
const userController = require("./controllers/userController");
const GoogleLoginController = require("./controllers/GoogleLogin");

// Set up routes for userController
app.post("/registerWithCheck", jsonParser, userController.registerWithCheck);
app.post("/login", jsonParser, userController.login);
app.post("/authen", jsonParser, userController.authen);
app.get("/user_detail", jsonParser, userController.user_detail);
app.post("/googleLogin", jsonParser, GoogleLoginController.GoogleLogin);
app.post("/test", jsonParser, userController.test);


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
