// import MYSQL connection
var connection = require("../config/connection.js");

// build queries
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return err.toString();
}

function objTosql(ob) {
    var arr = [];
    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}

// creating the ORM
var orm = {
    selectAll: function(tableInput, cb) {
        // build query
        var queryString = "SELECT * FROM " + tableInput + ";";
        // connect and run query
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
}