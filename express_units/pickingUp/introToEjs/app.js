var express = require('express');
var app = express();

app.listen(3000, () => {
	console.log("listening on PORT 3000");
});

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/love/:name", (req, res) => {
	name = req.params.name;
	res.render("love.ejs", {nameVar: name});
});