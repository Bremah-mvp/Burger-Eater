// dependencies

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// routes
router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {burgers: data};
        res.render("index", hbsObject);
    });
});

// insert one burger
router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function() {
        res.redirect("/index");
    });
});

// update one
router.put("/burgers/updateOne/:id", function(req, res) {
    var condition = "id =" + res.params.id;
    console.log("condition", condition);

    burger.updateOne({devoured: res.body.devoured}, condition, function() {
        res.redirect("/index");

    });
});

module.exports = router;
