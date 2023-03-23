const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/courseAdd", courseController.courseAdd);
router.post("/courseUpdate", courseController.courseUpdate);
router.delete("/courseDelete", courseController.courseDelete);

module.exports = router;
