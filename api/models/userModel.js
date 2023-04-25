const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "Fullstack-Login-2021";
const connection = require("./database.utils");

exports.checkIfEmailExists = function (email, callback) {
  connection.execute(
    "SELECT COUNT(*) as count FROM tbl_users WHERE email = ?",
    [email],
    callback
  );
};

exports.createUser = function (user, callback) {
  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO tbl_users (email,password,firstname,lastname) VALUES (?,?,?,?)",
      [user.email, hash, user.firstname, user.lastname],
      callback
    );
  });
};

exports.generateAuthToken = function (user, callback) {
  const token = jwt.sign({ id: user.id }, secret, { expiresIn: 3600 });
  callback(null, token);
};

exports.getUserById = function (id) {
  return new Promise((resolve, reject) => {
    connection.execute(
      "SELECT * FROM tbl_users WHERE user = ?",
      [id],
      function (err, rows, fields) {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]);
        }
      }
    );
  });
};

exports.getUserByEmail = function (email, callback) { connection.execute(
    "SELECT * FROM tbl_users WHERE email = ?",
    [email],
    callback
  );
};

exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, callback);
};

exports.createToken = function (user, expiresIn) {
  return jwt.sign(
    {
      email: user.email,
      id: user.user,
      firstname: user.firstname,
    },
    secret,
    { expiresIn }
  );
};
