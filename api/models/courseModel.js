const db = require("./database.utils");

exports.addCourse = (params, callback) => {
  db.execute(
    "INSERT INTO tbl_course (course, category, imageUrl, preview) VALUES (?, ?, ?, ?)",
    params,
    callback
  );
};

exports.courseUpdate = (params, id, callback) => {
  db.execute(
    "UPDATE tbl_course SET course = ?, category = ?, imageUrl = ?, preview = ? WHERE course_id = ?",
    [...params, id],
    callback
  );
};

exports.getAllCourses = (callback) => {
  db.query("SELECT * FROM tbl_course", callback);
};

exports.deleteCourse = (courseId, callback) => {
  db.execute("DELETE FROM tbl_course WHERE course_id = ?", [courseId], callback);
};
