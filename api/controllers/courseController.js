const {
  addCourse,
  courseUpdate,
  getAllCourses,
  deleteCourse,
} = require("../models/courseModel");

exports.courseAdd = function (req, res) {
  const params = [
    req.body.course,
    req.body.category,
    req.body.imageUrl,
    req.body.preview,
  ];

  addCourse(params, function (err, results) {
    if (err) {
      res.json({ status: "error", message: err });
    } else {
      res.json({ status: "ok", message: "Insert Successfuly" });
    }
  });
};

exports.courseUpdate = function (req, res) {
  const courseId = req.params.course_id;
  const params = [
    req.body.course,
    req.body.category,
    req.body.imageUrl,
    req.body.preview,
    courseId,
  ];

  courseUpdate(params, function (err, results) {
    if (err) {
      res.json({ status: "error", message: err });
      return;
    } else {
      res.json({ status: "ok", message: "Update Successfuly" });
    }
  });
};

exports.coursesGet = function (req, res) {
  getAllCourses(function (err, results) {
    if (err) {
      res.json({ status: "error", message: err });
    } else {
      res.json({ status: "ok", data: results });
    }
  });
};

exports.courseDelete = function (req, res) {
  const courseId = req.params.course_id;
  deleteCourse(courseId, function (err, results) {
    if (err) {
      res.json({ status: "error", message: err });
    } else {
      if (results.affectedRows > 0) {
        res.json({ status: "ok", message: "Course deleted successfully" });
      } else {
        res.json({ status: "error", message: "Course not found" });
      }
    }
  });
};
