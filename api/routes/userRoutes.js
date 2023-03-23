const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/registerWithCheck", userController.registerWithCheck);
router.post("/login", userController.login);
router.post("/authen", userController.authen);
router.get("/user_detail", userController.user_detail);
router.post("/test", userController.test);

module.exports = router;
