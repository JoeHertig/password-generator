// Assignment Code
var generateBtn = document.querySelector("#generate");

//                                Generate functions

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

  // make sure character between 8 - 128
  if (promptLength < 8 || promptLength > 128) {
    window.alert(
      "Please choose an amount with at least 8 characters and no more than 128."
    );
    // start function over for valid character amt.
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
}

// randomLower function
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// randomUpper function
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// randomNumber function
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

// randomSymbol function
function randomSymbol() {
  var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

getLength();
