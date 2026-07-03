// const mysql = require("mysql2");
// require("dotenv").config();

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// connection.connect((err) => {
//     if (err) {
//         console.log("Database Connection Failed");
//         console.log(err);
//         return;
//     }

//     console.log("MySQL Connected Successfully");
// });

// module.exports = connection;

const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, "../certs/isrgrootx1.pem"))
  }
});

connection.connect((err) => {
  if (err) {
    console.error("Database Connection Failed");
    console.error(err);
    return;
  }

  console.log("MySQL Connected Successfully");
});

module.exports = connection;