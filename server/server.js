
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
app.post("/customer_register", signupValidation, (req, res, next) => {
  // console.log(req)
  dbConn.query(
    `SELECT * FROM customer WHERE LOWER(email) = LOWER(${dbConn.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        console.log(result)
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
              `INSERT INTO customer (name, email, password) VALUES ('${req.body.name
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

//Register Owner
app.post("/owner-register", signupValidation, (req, res, next) => {
  console.log(req)
  dbConn.query(
    `SELECT * FROM house_owner WHERE LOWER(email) = LOWER(${dbConn.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        console.log(result)
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
              `INSERT INTO house_owner (name, email, password) VALUES ('${req.body.name
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

//Room registration
app.post("/room_register", (req, res, next) => {
  // console.log(req)
  // has hashed pw => add to database
  dbConn.query(
    `SELECT * FROM room WHERE room_no = ${dbConn.escape(
      req.body.room
    )};`,
    (err, result) => {
      console.log(result)
      if (result.length) {
        // console.log(result)
        return res.status(409).send({
          msg: "This room is already in use!",
        });
      } else {
        dbConn.query(
          `INSERT INTO room (room_no, Description, house_owner, beds, amount, houseNo, amenities, maxDay, minDay, floor ) VALUES (${dbConn.escape(req.body.room
          )}, ${dbConn.escape(req.body.description)}, ${dbConn.escape(
            req.body.houseowner
          )}, ${dbConn.escape(req.body.beds)}, ${dbConn.escape(req.body.amount)} , ${dbConn.escape(req.body.houseno)}, ${dbConn.escape(req.body.amenities)}, ${dbConn.escape(req.body.max)}, ${dbConn.escape(req.body.min)}, ${dbConn.escape(req.body.floor)})`,
          (err, result) => {
            if (err) {
              throw err;
              return res.status(400).send({
                msg: err,
              });
            }
            return res.status(201).send({
              msg: "The room has been registerd with us!",
            });
          }
        );
      }
    }
  );
})
//JWT Login
app.post("/login", loginValidation, (req, res, next) => {
  console.log(req)
  dbConn.query(
    `SELECT * FROM customer WHERE email = ${dbConn.escape(req.body.email)};`,
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
      // console.log(req.body.password, result[0]["password"])
      if (req.body.password === result[0]["password"]) {
        const token = jwt.sign(
          { id: result[0].id },
          "the-super-strong-secrect",
          { expiresIn: "1h" }
        );
        result[0].token = token;
        dbConn.query(
          `UPDATE customer SET token_S = now() WHERE id = '${result[0].id}'`
        );
        return res.status(200).send({
          msg: "Logged in!",
          token,
          user: result[0],
        });
      }
      return res.status(401).send({
        msg: "Username or password is incorrect!",
      }); `
          `
    }
  );
}
);
app.post("/owner-login", loginValidation, (req, res, next) => {
  // const user_name = req.params.name
  // console.log(req)
  dbConn.query(
    `SELECT * FROM house_owner WHERE email = ${dbConn.escape(req.body.email)}`,
    (err, result) => {
      // console.log(result);
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
      // console.log(req.body.password, result[0]["password"])
      if (req.body.password === result[0]["password"]) {
        const token = jwt.sign(
          { id: result[0].id },
          "the-super-strong-secrect",
          { expiresIn: "1h" }
        );
        result[0].token = token;
        dbConn.query(
          `UPDATE house_owner SET token_S = now() WHERE id = '${result[0].id}'`
        );
        return res.status(200).send({
          msg: "Logged in!",
          token,
          user: result[0],
        });
      }
      return res.status(401).send({
        msg: "Username or password is incorrect!",
      }); `
          `
    }
  );
}
);

//delete room
app.delete("/room/:id", signupValidation, (req, res, next) => {
  
  
  const user_id = req.params.id

  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer") ||
    !req.headers.authorization.split(" ")[1]
  ) {
    return res.status(422).json({
      message: "Please provide the token",
    });
  }
  const theToken = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(theToken, "the-super-strong-secrect");
  console.log(decoded)
  if(theToken){
    console.log(theToken)
    dbConn.query(
      "DELETE FROM room WHERE id = ?",
      [user_id],
      function (error, results, fields) {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "User has been deleted successfully.",
        });
      }
    );
  }
});

//get room information
app.get("/get-rooms", signupValidation, (req, res, next) => {
  // const token = req.headers.authorization

  // if (!token) {
  //   return res.status(403).send("A token is required for retrie");
  // }
  // // console.log(req.body)

  // if (
  //   !req.headers.authorization ||
  //   !req.headers.authorization.startsWith("Bearer") ||
  //   !req.headers.authorization.split(" ")[1]
  // ) {
  //   return res.status(422).json({
  //     message: "Please provide the token",
  //   });
  // }
  // const theToken = req.headers.authorization.split(" ")[1];
  // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
  // console.log(decoded)
  // if(theToken){
  // console.log(theToken)
  dbConn.query(
    "SELECT * FROM room",
    function (error, results, fields) {
      // console.log(decoded.name)
      if (error) throw error;
      return res.send({ data: results, message: "Room List Fetch Successfully." });
    }
  );
  // }
});
app.get("/get-room/:id", signupValidation, (req, res, next) => {
  // const token = req.headers.authorization
  const user_id = req.params.id
  // console.log(user_id)

  // if (!token) {
  //   return res.status(403).send("A token is required for retrie");
  // }
  // // console.log(req.body)

  // if (
  //   !req.headers.authorization ||
  //   !req.headers.authorization.startsWith("Bearer") ||
  //   !req.headers.authorization.split(" ")[1]
  // ) {
  //   return res.status(422).json({
  //     message: "Please provide the token",
  //   });
  // }
  // const theToken = req.headers.authorization.split(" ")[1];
  // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
  // console.log(decoded)
  // if (theToken) {
  //   console.log(theToken)
  dbConn.query(
    "SELECT * FROM room WHERE id=?",
    user_id,
    function (error, results, fields) {
      // console.log(decoded.name)
      if (error) throw error;
      return res.send({ data: results, message: "Users Fetch Successfully." });
    }
  );
}
  // }
);

//room information by name
app.get("/get-rooms/:name", signupValidation, (req, res, next) => {
  // const token = req.headers.authorization
  const user_name = req.params.name
  // console.log(user_id)

  // if (!token) {
  //   return res.status(403).send("A token is required for retrie");
  // }
  // // console.log(req.body)

  // if (
  //   !req.headers.authorization ||
  //   !req.headers.authorization.startsWith("Bearer") ||
  //   !req.headers.authorization.split(" ")[1]
  // ) {
  //   return res.status(422).json({
  //     message: "Please provide the token",
  //   });
  // }
  // const theToken = req.headers.authorization.split(" ")[1];
  // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
  // console.log(decoded)
  // if (theToken) {
  //   console.log(theToken)
  dbConn.query(
    "SELECT * FROM room WHERE house_owner=?",
    user_name,
    function (error, results, fields) {
      // console.log(decoded.name)
      if (error) throw error;
      return res.send({ data: results, message: "Users Fetch Successfully." });
    }
  );
}
  // }
);

//book rooms
app.post("/bookroom/:id", (req, res, next) => {
  // console.log(req)
  const user_id = req.params.id
  dbConn.query(
    "SELECT * FROM room WHERE id=?",
    user_id,
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      // return res.send({ data: results, message: "Users Fetch Successfully." });
      // console.log(results[0])

      // has hashed pw => add to database
      console.log(results)
      dbConn.query(
        `UPDATE room SET startDay = ${dbConn.escape(req.body.startday)}, endDay = ${dbConn.escape(req.body.endday)} WHERE id = '${results[0].id}'`,
        (err, result) => {
          console.log(result)
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err,
            });
          }
          return res.status(201).send({
            msg: "The room has been booked with us!",
          });
        }
      );
    }
  )
}

);

//Update Room
app.put("/update-room", signupValidation, (req, res, next) => {
  // console.log(res)

  const user_id = req.params.id
  // if (
  //   !req.headers.authorization ||
  //   !req.headers.authorization.startsWith("Bearer") ||
  //   !req.headers.authorization.split(" ")[1]
  // ) {
  //   return res.status(422).json({
  //     message: "Please provide the token",
  //   });
  // }
  // const theToken = req.headers.authorization.split(" ")[1];
  // // console.log(theToken)
  // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
  // console.log("data", req.body.name)
  // if (req.headers.authorization) {

    dbConn.query(
      `SELECT * FROM room WHERE id = ${dbConn.escape(req.body.id)}`,
      function (error, results, fields) {
        if(results[0].id){
          dbConn.query(
          `UPDATE room SET Description = ${dbConn.escape(req.body.description)} WHERE id = '${results[0].id}'`,
          function (error, results, fields) {

          }
        )}
        // console.log(decoded.name)
        if (error) throw error;
        return res.send({ data: results, message: "Users updated Successfully." });
      }
    );
  }
// }
);

    //Multer Storage 
  const storage = multer.diskStorage({
      destination: function(req, file, cb) {
          cb(null, './uploads');
      },
     
      filename: function(req, file, cb) {
        // console.log(req.headers)
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      }
  });
     
  var upload = multer({ storage: storage })
     
  app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.post('/profile-upload-single', upload.any('profile-file'), function (req, res, next) {
    console.log(req)
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.files))
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    response += `<img src="${req.files[0].path}" /><br>`
    var imgsrc = req.files[0].path
    var insertData = "INSERT INTO users1(images1)VALUES(?)"
    dbConn.query(insertData, [imgsrc],  (err, result) => {
        if (err) throw err;
        console.log("file uploaded")
        res.send({ message: "image added Successfully into database." });
    })
    return res.send(response)
  })
     
  app.post('/fileupload', upload.any('image'), (req, res) => {
    res.send({ message: "image added Successfully." });
    console.log(req.files[0].filename)
    console.log(req.files[0].path)
      var imgsrc = 'uploads/' + req.files[0].filename
      var insertData = "INSERT INTO users1(images1)VALUES(?)"
      dbConn.query(insertData, [imgsrc],  (err, result) => {
          if (err) throw err;
          console.log("file uploaded")
          res.send({ message: "image added Successfully into database." });
      })
  });

// set port in
app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});
module.exports = app;
