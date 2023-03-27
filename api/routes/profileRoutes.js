const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.put("/profileUpdate", profileController.profileUpdate);

module.exports = router;
