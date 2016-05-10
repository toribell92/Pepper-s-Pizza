var express = require ("express");
var bodyParser = require("body-parser");
var csv = require("ya-csv");

var app = express();

app.get('/pepperspizza', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/pizza"));

app.use(bodyParser.urlencoded({extended:true}));

app.post('/signup', function(request, response) {
    var visitorName = request.body.visitorName;
    var visitorEmail = request.body.vistorEmail;
    //open the csv file in 'append' mode
    var database = csv.createCsvFileWriter("newsletter_data.csv", {flags: "a"});
    var data = [visitorName, visitorEmail];
    database.writeRecord(data);

    //close the file
    database.writeStream.end();

    response.send("Thanks " + visitorName + ", you've been signed up to our newsletter");
});

app.listen(8000, function() {
    console.log('started the server on port 8000');
});