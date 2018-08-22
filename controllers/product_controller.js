var express = require("express");
var shoes = require("../models/product.js");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("index");
})

router.get("/admin", function (req, res){
    shoes.selectAll(function(data){
        console.log(data);
        res.render("admin", {data});
    });
});

module.exports = router;