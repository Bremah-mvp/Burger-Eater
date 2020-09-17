// import the ORM
var orm = require("../config/orm.js");

// create burger
var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    }
}