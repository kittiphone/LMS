const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { OAuth2Client } = require('google-auth-library');

const app = express();
const jsonParser = bodyParser.json();

const CLIENT_ID = '242248900939-uahap52qt1r44p4imcqvh0mirda13v1j.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

const SECRET_KEY = "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";

app.use(cors());

exports.GoogleLogin = async function(req, res, next) {

  const { tokenId } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: CLIENT_ID,
  });
  const { name, email } = ticket.getPayload();

  connection.query(
    'SELECT * FROM tbl_users WHERE email = ?',
    [email],
    async (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Server error' });
      } else if (results.length > 0) {
        const token = jwt.sign({ id: results[0].id }, SECRET_KEY, {
          expiresIn: '1h',
        });
        res.status(200).json({ token });
      } else {
        connection.query(
          'INSERT INTO tbl_users (firstname, email) VALUES (?, ?)',
          [name, email],
          (error, results) => {
            if (error) {
              res.status(500).json({ message: 'Server error' });
            } else {
              const token = jwt.sign({ id: results.insertId }, SECRET_KEY, {
                expiresIn: '1h',
              });
              res.status(200).json({ token });
            }
          }
        );
      }
    }
  );
};
