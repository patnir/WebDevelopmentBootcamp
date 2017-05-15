var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Tony", "Miranda", "Justin", "Pierre"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
	console.log("server started");
});

app.get("/", function(req, res) {
	res.render("home");
}); 

app.get("/friends", (req, res) => {
	res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res) {
	console.log(req.body.newFriend);
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	// res.send("You have reached the post route");
	res.redirect("/friends");
});

/*

Setting up a post route, similar to app get
How to send a request to postman
How to use a form, we needed to use action and method


*/