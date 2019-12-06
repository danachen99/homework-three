var lengthEl = document.querySelector("#length");
var submit = document.querySelector("#submit");
var displayBox = document.querySelector("#password");
var copy = document.querySelector("#copy");

submit.addEventListener("click", function(event) {
    event.preventDefault();

    var passCharacters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-_=+";
    var passLength = lengthEl.value;

    var password = "";

    if ((passLength >= 8) && (passLength <= 128)) {
        for (var i = 0; i <= passLength; i++) {
            //?? get password 
            password = password + passCharacters.charAt(Math.floor(Math.random() * Math.floor(passCharacters.length - 1)));
        }
        displayBox.value = password;
    } else {
        alert("Invalid entry");
    }
});

copy.addEventListener("click", function() {

});