var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "vistra_database",
  password: "uhv34@aftddFFa1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});