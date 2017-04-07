console.log("asdf this is cool");

var express = require("express");
var app = express();

app.get("/", (req, res) => {
	res.send("print baby!");
});

app.get("/bye", (req, res) => {
	res.send("print babyeby!");
});


app.get("/r/:subname", function(req, res) {
	res.send(req.params + "\n" + "welcome to " + req.params.subname);
});

app.get("*", (req, res) => {
	res.send("dude, wrong page")
}); // order of routes matters, 
// if this were at the top then 
// other routes would be accessed

app.listen(3000, () => {
	console.log("listening on PORT 3000");
});