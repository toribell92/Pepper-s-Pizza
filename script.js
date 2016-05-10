// var generateMessage = function (salutation, visitor_name) {
//     var salutation_message = salutation + visitor_name;
//     return salutation_message;
//
// };
//
// var greet = function (event_details){
//     // Gets the user's name and greets them
//     var greeting = "Hello ";
//     var name = prompt("What's your name?");
//     var greeting_message = generateMessage (greeting, name);
//     alert (greeting_message);
// };
// greet();

var greet = function (event_details) {
    event_details.preventDefault();
    var greeting = "Hi ";
    var name = document.getElementById('name').value;
    var greeting_message = greeting + name + ". You are now signed up to our newsletter!";
    // alert(greeting_message);
    // event_details.preventDefault();
    event_details.target.style.display = 'none';

    var container = document.getElementById('contact-form-container');
    container.innerHTML = "<p>" + greeting_message + "</p>";

    var h2 = document.getElementById('newsletter');
    h2.style.color = "green";
};

var form = document.getElementById('contact-form');
form.addEventListener('submit', greet);