// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

//                                Generate functions
// randomLower function
function randomLower() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // should be what user input + a value = password
  passwordText.value = password;
}
// generatePassword function
// function generatePassword() {

// }

// getLength function
function getLength() {
  // asking user for password Length
  var promptLength = prompt(
    'Please choose the length of the password. "An Amount with at least 8 characters and no more than 128."'
  );

  // Validate prompt answer
  if (promptLength === "" || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // start function over for valid answer
    return getLength();
  }

  // validate if input is correct
  var promptLengthConfirm = window.confirm(
    "Is " + promptLength + " the correct length?"
  );

  if (promptLengthConfirm) {
    return promptLengthConfirm;
  } else {
    getLength();
  }
  console.log(promptLengthConfirm);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

getLength();
