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
//   var sql = "CREATE TABLE gallery (id INT AUTO_INCREMENT PRIMARY KEY, owner VARCHAR(20), images VARCHAR(100))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE room MODIFY endDay DATE";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});


// ALTER TABLE table_name MODIFY column_name varchar(new_length)