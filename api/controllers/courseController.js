const connection = require("../models/database.utils");
exports.courseAdd = function (req, res, next) {
  const params = [
    req.body.course,
    req.body.category,
    req.body.imageUrl,
    req.body.preview,
  ];

  connection.execute(
    "INSERT INTO tbl_course (course,category,imageUrl,preview) VALUES (?,?,?,?)",
    params,
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      } else {
        res.json({ status: "ok", message: "Insert Successfuly" });
      }
    }
  );
};

exports.courseUpdate = function (req, res, next) {
  const params = [
    req.body.course,
    req.body.category,
    req.body.imageUrl,
    req.body.preview,
    req.body.course_id,
  ];

  connection.execute(
    "UPDATE tbl_course SET course= ?, category= ?,imageUrl = ?,preview = ? WHERE course_id = ?",
    params,
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      } else {
        res.json({ status: "ok", message: "Update Successfuly" });
      }
    }
  );
};

exports.coursesGet = function(req, res, next) {
  connection.query("SELECT * FROM tbl_course", function(err, results, fields) {
    if (err) {
      res.json({ status: "error", message: err });
      return;
    } else {
      res.json({ status: "ok", data: results });
    }
  });
};



exports.courseDelete = function (req, res, next) {
  const courseId = req.params.course_id;
  connection.execute(
    "DELETE FROM tbl_course WHERE course_id = ?",
    [courseId],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      } else {
        if (results.affectedRows > 0) {
          res.json({ status: "ok", message: "Course deleted successfully" });
        } else {
          res.json({ status: "error", message: "Course not found" });
        }
      }
    }
  );
};


