var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
var port = process.env.PORT || 3500;



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var routes = require("./controllers/product_controller.js");
app.use("/", routes);

app.listen(port);