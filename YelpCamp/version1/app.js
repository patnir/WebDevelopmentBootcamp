var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Salmon Creek", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Willesley_Scout_camp.jpg"},
	{name: "Salmon Creek1", image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cabin_Camp_3_PRWI.JPG"},
	{name: "Salmon Creek2", image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Camp_Mantella_02.jpg"},
	{name: "Salmon Creek3", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Willesley_Scout_camp.jpg"},
	{name: "Salmon Creek4", image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cabin_Camp_3_PRWI.JPG"},
	{name: "Salmon Creek5", image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Camp_Mantella_02.jpg"},
	{name: "Salmon Creek6", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Willesley_Scout_camp.jpg"},
	{name: "Salmon Creek7", image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cabin_Camp_3_PRWI.JPG"},
	{name: "Salmon Creek8", image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Camp_Mantella_02.jpg"}
];

app.get("/", function(req, res) {
	//res.send("this will be the landing page");
	res.render("landing");
});


app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	//res.send("campgrounds post request"); 
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
	res.render("new.ejs");
});

app.listen(3000, () => {
	console.log("yelp camp v1 has started");
});