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


app.get("/posts", (req, res) => {
	var posts = [
		{title: "manager", name: "Rahul"},
		{title: "developer", name: "Tom"},
		{title: "comm", name: "Jess"}
	];

	res.render("posts.ejs", {posts: posts});
});