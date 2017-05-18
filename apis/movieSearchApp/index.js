var express = require("express");
var app = express();
app.set("view engine", "ejs");
var request = require("request");

app.listen(3000, () => {
	console.log("Movie app has started");
});

app.get("/", (req, res)=> {
	res.render("search");
});

app.get("/results", function(req, res) {
	//console.log(req.query.search);
	var search = req.query.search;
	var url = "http://omdbapi.com/?s=" + search;
	request(url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			//res.send(results["Search"][0]);
			res.render("results", {data: data});

		}
	})
});