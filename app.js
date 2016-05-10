var express = require ("express");
var app = express();

app.get('/pepperspizza', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/pizza"));

app.listen(8000, function() {
    console.log('started the server on port 8000');
});