var express = require("express");
var app = express();

var request = require("request");

app.listen(3000, () => {
	console.log("Movie app has started");
});

app.get("/results", function(req, res) {
	request("http://omdbapi.com/?s=california", function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var results = JSON.parse(body);
			res.send(results["Search"][0]);
		}
	})
});