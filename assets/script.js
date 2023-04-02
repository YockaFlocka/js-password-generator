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
var password2;

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
    alert("You must enter a valid value");
    generatePassword();
    
  } else if (userInput < 8 || userInput > 128) {
    // makes sure user chooses a number 8-128
    userInput = parseInt(prompt("Please choose a number between 8 and 128"));
  } else {
    // Once a number is chosen, continues to ask the user
    yesUppercase = confirm("Will this password contain Uppercase letters?");
    yesLowercase = confirm("Will this password contain Lowercase letters?");
    yesNumber = confirm("Will this password contain numbers?");
    yesCharacter = confirm("Will this password contain special characters?");
    password2 = elseIf(yesCharacter, yesLowercase, yesUppercase, yesNumber);
    return password2;
  };
}

// function to hold the else if statements
function elseIf (yesCharacter, yesLowercase, yesUppercase, yesNumber) {

// If user selects 4 negative options
if (!yesUppercase && !yesLowercase && !yesNumber && !yesCharacter) {
  final = alert("You must choose a valid number!");
  generatePassword();
} 
// Else if for 4 positive options
else if (yesUppercase && yesLowercase && yesNumber && yesCharacter) {
  final = specialCharacters.concat(numbers, lowercase, uppercase);
  var variable = inputPassword(final);
  return variable;
}
// Else if for 3 positive options
else if (yesLowercase && yesNumber && yesCharacter) {
  final = specialCharacters.concat(numbers, lowercase);
  var variable = inputPassword(final);
  return variable;
}
else if (yesUppercase && yesNumber && yesCharacter) {
  final = specialCharacters.concat(uppercase, numbers);
  var variable = inputPassword(final);
  return variable;
}
else if (yesLowercase && yesUppercase && yesCharacter) {
  final = specialCharacters.concat(lowercase, uppercase);
  var variable = inputPassword(final);
  return variable;
}
else if (yesLowercase && yesUppercase && yesNumber) {
  final = numbers.concat(uppercase, lowercase);
  var variable = inputPassword(final);
  return variable;
}
// Else if for 2 positive options
else if (yesUppercase && yesLowercase) {
  final = uppercase.concat(lowercase);
  var variable = inputPassword(final);
  return variable;
}
else if (yesUppercase && yesNumber) {
  final = uppercase.concat(numbers);
  var variable = inputPassword(final);
  return variable;
}
else if (yesUppercase && yesCharacter) {
  final = uppercase.concat(specialCharacters);
  var variable = inputPassword(final);
  return variable;
}
else if (yesLowercase && yesNumber) {
  final = lowercase.concat(numbers);
  var variable = inputPassword(final);
  return variable;
}
else if (yesLowercase && yesCharacter) {
  final = lowercase.concat(specialCharacters);
  var variable = inputPassword(final);
  return variable;
}
else if (yesNumber && yesCharacter) {
  final = numbers.concat(specialCharacters);
  var variable = inputPassword(final);
  return variable;
}
// Else if for 1 positive option
else if (yesUppercase) {
  final = uppercase;
  var variable = inputPassword(final);
  return variable;
}
else if (yesLowercase) {
  final = lowercase;
  var variable = inputPassword(final);
  return variable;
}
else if (yesNumber) {
  final = numbers;
  var variable = inputPassword(final);
  return variable;
}
else if (yesCharacter) {
  final = specialCharacters;
  var variable = inputPassword(final);
  return variable;
}
}

var finalPassword;
var passwordText;


function inputPassword(final) {

var userPassword = [];

// generates a random password
for (var i = 0; i < userInput; i++) {
  var pickFinal = final[Math.floor(Math.random() * final.length)];
  userPassword.push(pickFinal);
}

// makes the password a string to avoid commas
finalPassword = userPassword.join("");
return finalPassword;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
