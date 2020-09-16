// set up database connection
var mysql = require("mysql");

 var connection;

 // set up for heroku
 if (process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL);

 } else {
     connection.createConnection({
         host: "localhost",
         port: 3306,
         user: "root",
         password: "Bremen12345$",
         database: "burgers_"
     });
 };

 // connect to database
connection.connect(function(err) {
    if (err) {
        console.error("error during connect:" + err.stack + "\n");
        return;
    }
    console.log("connected successfully as id:" + connection.threadId + "\n" );
});

// export the connection back to orm
module.exports = connection;

