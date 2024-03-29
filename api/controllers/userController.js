// ./src/controllers/userController.js

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021';
const connection = require('../models/database.utils');

exports.registerWithCheck = function(req, res, next) {
  connection.execute(
    'SELECT COUNT(*) as count FROM tbl_users WHERE email = ?',
    [req.body.email],
    function (err, results, fields) {
      if (err) {
        res.json({status: 'error', message: err});
        return;
      }
      if (results[0].count > 0) {
        res.json({ status: 'error', message: 'Email already exists' });
        return;
      }
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
          'INSERT INTO tbl_users (email,password,firstname,lastname) VALUES (?,?,?,?)',
          [req.body.email, hash, req.body.firstname, req.body.lastname],
          function (err, results, fields) {
            if (err) {
              res.json({status: 'error', message: err});
              return;
            }
            res.json({ status: 'ok' });
          }
        );
      });
    }
  );
};

exports.user_detail = function(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ status: 'error', message: 'Authorization header missing' });
    }
    
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secret);
    const userId = decoded.id;

    connection.execute('SELECT * FROM tbl_users WHERE user_id = ?', [userId], function(err, rows, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'An unexpected error occurred' });
        return;
      }

      if (rows.length === 0) {
        res.status(404).json({ status: 'error', message: 'User not found' });
        return;
      } 
      if(rows.length > 0) {
        const user = rows[0];
        res.json({ status: 'ok', user });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ status: 'error', message: 'Invalid or expired token' });
  }
};

exports.login = function(req, res, next) {
  connection.execute(
    'SELECT * FROM tbl_users WHERE email = ?',
    [req.body.email],
    function (err, tbl_users, fields) {
      if (err) {
        res.json({status: 'error', message: err});
        return;
      }
      if (tbl_users.length == 0) {
        res.json({status: 'error', message: 'no user found'});
        return;
      }
      bcrypt.compare(req.body.password, tbl_users[0].password, function(err, isLogin) {
        if (isLogin){
          var token = jwt.sign({ email: tbl_users[0].email,id: tbl_users[0].user_id },  secret, { expiresIn: '1h' });
          res.json({status: 'ok', message: 'login success',token});
        } else {
          res.json({status: 'error', message: 'login failed'});
        }
      });
    }
  );
};

exports.authen = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, secret);
    res.json({ status: 'ok', decoded });
  } catch (err) {
    res.json({ status: 'error', message: err.message });
  }
};

exports.test = function(req, res, next) {
  const { email, password, plan, option1 } = req.body;
  const sql = `INSERT INTO test (email, password, plan, option1) VALUES (?, ?, ?, ?)`;
  const values = [email, password, plan, option1];

  connection.query(sql, values, function (err, result) {
    if (err) {
      res.json({status: 'error', message: err});
      return;
    }
    res.json({status: 'ok', message: 'Data inserted successfully'});
  });
}; 

//The code has been refactored to add some return statements inside the functions, to propagate the error and avoid further execution of the code when an error is present. The conditional statement in the user_detail function was also changed to fix a bug when the number of rows is not equal to 0.