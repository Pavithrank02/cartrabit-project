var express = require("express");
const path = require('path');
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
app.use(express.json());
app.use(express.urlencoded());
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const http = require("http");
const fs = require("fs");
const url = require("url");
app.use(express.static(__dirname + '/public'));
app.use('.', express.static('uploads'));
const multer = require('multer');
const { signupValidation, loginValidation } = require("./validation");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// default route
app.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});

// connection configurations
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});
// connect to database
dbConn.connect();

//Register User
app.post("/register", signupValidation, (req, res, next) => {
  dbConn.query(
    `SELECT * FROM customers WHERE LOWER(email) = LOWER(${dbConn.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This user is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            // has hashed pw => add to database
            dbConn.query(
              `INSERT INTO users1 (name, email, password) VALUES ('${
                req.body.name
              }', ${dbConn.escape(req.body.email)}, ${dbConn.escape(
                req.body.password
              )})`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  msg: "The user has been registerd with us!",
                });
              }
            );
          }
        });
      }
    }
  );
});
//JWT Login
app.post("/login", loginValidation, (req, res, next) => {
  console.log(req)
  
  dbConn.query(
    `SELECT * FROM users1 WHERE email = ${dbConn.escape(req.body.email)};`,
    (err, result) => {
      console.log(result);
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      // if (!result) {
      //   return res.status(401).send({
      //     msg: "Email or password is incorrect!",
      //   });
      // }
      // check password
      console.log(req.body.password, result[0]["password"])
          if (req.body.password === result[0]["password"]) {
            const token = jwt.sign(
              { id: result[0].id },
              "the-super-strong-secrect",
              { expiresIn: "1h" }
            );
            result[0].token = token;
            dbConn.query(
              `UPDATE users1 SET token_S = now() WHERE id = '${result[0].id}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });`
          `
        }
      );
    }
  );


// set port
app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});
module.exports = app;
