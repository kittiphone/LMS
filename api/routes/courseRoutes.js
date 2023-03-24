const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/courseAdd", courseController.courseAdd);
router.put("/courseUpdate", courseController.courseUpdate);
router.post("/courseDelete/:course_id", courseController.courseDelete);
router.get("/courseGet", courseController.coursesGet);

module.exports = router;
