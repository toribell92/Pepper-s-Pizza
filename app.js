var express = require ("express");
var bodyParser = require("body-parser");

var app = express();

app.get('/pepperspizza', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/pizza"));

app.use(bodyParser.urlencoded({extended:true}));

app.post('/signup', function(request, response){
    var Tori_name = "Name: " + request.body.visitorName;
    response.send(Tori_name);
});

app.listen(8000, function() {
    console.log('started the server on port 8000');
});