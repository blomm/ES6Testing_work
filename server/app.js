//require express
var express = require("../node_modules/express");
//initialise express
var app = express();
//require the path module (found in express)
var path = require("path");

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/../view/SpecRunner.html'));
})

app.use(express.static(path.join(__dirname, '../')));
var http = require('http').Server(app);
http.listen(8030);