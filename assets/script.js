// User variables
var userInput;
var yesNumber;
var yesCharacter;
var yesUppercase;
var yesLowercase;

// Password values
var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];

var specialCharacters = [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];


var final;


// Function to generate password
function generatePassword() {
  // Asks the user to input a number
  userInput = parseInt(
    prompt(
      "How many characters do you want your password to be? Choose a number between 8 and 128"
    )
  );
  // if statement to catch unwanted values
  if (!userInput) {
    alert("Please choose a value between 8 and 128");
  } else if (userInput < 8 || userInput > 128) {
    // makes sure user chooses a number 8-128
    userInput = parseInt(prompt("Please choose a number between 8 and 128"));
  } else {
    // Once a number is chosen, continues to ask the user
    yesUppercase = confirm("Will this password contain Uppercase letters?");
    yesLowercase = confirm("Will this password contain Lowercase letters?");
    yesNumber = confirm("Will this password contain numbers?");
    yesCharacter = confirm("Will this password contain special characters?");
  };
}

// If user selects 4 negative options
if (!yesUppercase && !yesLowercase && !yesNumber && !yesCharacter) {
  final = alert("You must choose values for the password!");
} 
// Else if for 4 positive options
else if (yesUppercase && yesLowercase && yesNumber && yesCharacter) {
  final = specialCharacters.concat(numbers, lowercase, uppercase);  
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
