// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 // should be what user input + a value = password
  passwordText.value = password;

}

function generatePassword() {
  // Password Length
  var promptLength = window.prompt(
    'Please choose the length of the password. "An Amount with at least 8 characters and no more than 128."'
  );
  
  // Validate prompt answer
  if (promptLength === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    //Return function to generatePassword for valid answer
    return generatePassword();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();