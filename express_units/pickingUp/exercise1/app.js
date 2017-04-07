var express = require('express');
var app = express();

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

app.get('/', (req, res) => {
	res.send("Hello there");
});


app.get("/speak/:name", (req, res) => {
	name = req.params.name 
	if (name == 'pig') {
		res.send(req.params.name + ' says Oink');
	} else if (name == 'cow') {
		res.send(req.params.name + ' says moo');
	} else if (name == 'dog') {
		res.send(req.params.name + ' says bark');
	} else {
		res.send("sorry, page not found");	
	}
});

app.get("/repeat/:word/:times", (req, res) => {
	var word = req.params.word
	var times = req.params.times
	var rest = ""
	for (var i = 0; i < times; i++) {
		rest += word + " "
	}
	res.send(rest);
});

app.get('*', (req, res) => {
	res.send("sorry, page not found");
});