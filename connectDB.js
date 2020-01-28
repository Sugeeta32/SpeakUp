const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  //Your Username
  user: "root",
  //Your Password
  password: "Password1!",
  //Be sure to run seeds.sql first
  database: "speakUp_db"
});

connection.connect(function(err){
  if(err) throw err;
  console.log(`Connected to SQL DB as id ${connection.threadId}!`);
});

module.exports = connection;