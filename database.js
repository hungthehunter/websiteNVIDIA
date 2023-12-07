var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Grandy-092358",
    database:"query_lesson"
  });
  con.query("select * from query_lesson.user",(err,res)=>{
    if (err) {
        return console.error("Error:", err.message);
      }
      console.log("Result:", res);
  })