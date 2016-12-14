var express = require("express");

var router = express.Router();
//import model burger.js to use database function
var burger = require("../models/burger.js");

//create all routes and set up logic
router.get("/", function(req, res) {
	res.redirect("/burger");
});

router.get("/burger", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res) {
	burger.create([
		"", ""
		], [
		req.body.], function() {
			res.redirect("/burgers");
		});
});

router.put("/burgers/update/:id", function(req, res) {
	var condition = "id= " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function() {

		res.redirect("/burgers");
	});
});

//export to server.js
module.exports = router;