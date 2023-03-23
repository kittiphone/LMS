const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((error) => {
  if (error) {
    console.error("Failed to connect to database.");
    throw error;
  } else {
    console.log("Connected to database!");
  }
});

module.exports = connection;


