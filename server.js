// dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

// express app
var app = express();
app.use(express.static(_dirname + '/public'));

// bodyparsers
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html' }));

// override with POST having ?_method= DELETE or PUT
app.use(methodOverride('_method'));

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("viwe engine", "handlebars");

// import routes
var routes = require("./controller/burgers_controller.js");
app.use('/', routes);


