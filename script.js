var generateMessage = function (salutation, visitor_name) {
    var salutation_message = salutation + visitor_name;
    return salutation_message;

};

var greet = function (event_details){
    // Gets the user's name and greets them
    var greeting = "Hello ";
    var name = prompt("What's your name?");
    var greeting_message = generateMessage (greeting, name);
    alert (greeting_message);
};
greet();