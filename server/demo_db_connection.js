var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE room (id INT AUTO_INCREMENT PRIMARY KEY, room_no VARCHAR(20), Description VARCHAR(100), house_owner VARCHAR(20), beds VARCHAR(15), amount VARCHAR(15), houseNo VARCHAR(15), maxDay VARCHAR(15), minDay VARCHAR(15), images VARCHAR(15), floor VARCHAR(15) )";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE room MODIFY images varchar(255)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});

// ALTER TABLE table_name MODIFY column_name varchar(new_length)