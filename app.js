var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"},
  {name: "Granite Hill", image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
  {name: "Eagle's Peak", image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
  {name: "Granite Hill", image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
  {name: "Eagle's Peak", image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
  {name: "Salmon Creek", image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"},
  {name: "Salmon Creek", image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"},
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  // redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, function(){
  console.log("YelpCamp server has started");
});
