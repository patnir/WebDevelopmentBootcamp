var express = require('express');
var app = express();

app.use(express.static("C:\\Users\\SUNITA\\Desktop\\HackBaby!\\WebDevelopmentBootcamp\\express_units\\pickingUp\\introToEjs\\public"));
// app.use(express.static("/public"));

app.set("view engine", "ejs");

app.listen(3000, () => {
	console.log("listening on PORT 3000");
});

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/love/:name", (req, res) => {
	name = req.params.name;
	res.render("love", {nameVar: name});
});


app.get("/posts", (req, res) => {
	var posts = [
		{title: "manager", name: "Rahul"},
		{title: "developer", name: "Tom"},
		{title: "comm", name: "Jess"}
	];

	res.render("posts", {posts: posts});
});