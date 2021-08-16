// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var lower = "";
var upper = "";
var number = "";
var symbol = "";
var length = "";

//                                Generate functions

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // should be what user input + a value = password
  passwordText.value = password;
}

// generatePassword function
function generatePassword() {
  var promptLength = prompt(
    'Please choose the length of the password. "An Amount with at least 8 characters and no more than 128."'
  );
  // Validate prompt answer
  if (promptLength === "" || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // start function over for valid answer
    return generatePassword();
  }
  // make sure character between 8 - 128
  if (promptLength < 8 || promptLength > 128) {
    window.alert(
      "Please choose an amount with at least 8 characters and no more than 128."
    );
    // start function over for valid character amt.
    return generatePassword();
  }
  // validate if input is correct
  var promptLengthConfirm = window.confirm(
    "Is " + promptLength + " the correct length?"
  );
  if (promptLengthConfirm) {
    promptLength = length;
  } else {
    generatePassword();
  }

  // validate if user would like lowercase characters.
  var promptLowerConfirm = window.confirm(
    "Would you like to include lowercase characters?"
  );

  if (promptLowerConfirm) {
    promptLowerConfirm = lower;
  } else {
    randomFunc.cancel += 1;
    console.log(randomFunc.cancel);
  }

  //find random upper character
  var promptUpperConfirm = window.confirm(
    "Would you like to include uppercase characters?"
  );
  if (promptUpperConfirm) {
    promptUpperConfirm = upper;
  } else {
    randomFunc.cancel += 1;
    console.log(randomFunc.cancel);
  }

  //find random number
  var promptNumberConfirm = window.confirm(
    "Would you like to include numbers?"
  );
  if (promptNumberConfirm) {
    promptNumberConfirm = number;
  } else {
    randomFunc.cancel += 1;
    console.log(randomFunc.cancel);
  }

  // find random symbol/special character
  var promptSymbolConfirm = window.confirm(
    "Would you like to include special characters?"
  );
  if (promptSymbolConfirm) {
    promptSymbolConfirm = symbol;
  } else {
    randomFunc.cancel += 1;
    console.log(randomFunc.cancel);
  }
  // }
  randomFunc.trackCancel();

  // minimum count for all characters.
  var minimumCount = 0;

  // Emtpy minimums for lower, upper, number and symbols.
  var minimumLower = "";
  var minimumUpper = "";
  var minimumNumber = "";
  var minimumSymbol = "";

  //Generator function
  var functionArray = {
    // randomLower function
    randomLower: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },

    // randomUpper function
    randomUpper: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },

    // randomNumber function
    randomNumber: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
    },

    // randomSymbol function
    randomSymbol: function () {
      var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
  };

  // check to make sure user selected ok

  if (lower === true) {
    minimumLower = functionArray.randomLower();
    minimumCount++;
  }

  if (upper === true) {
    minimumUpper = functionArray.randomUpper();
    minimumCount++;
  }

  if (number === true) {
    minimumNumber = functionArray.randomNumber();
    minimumCount++;
  }

  if (symbol === true) {
    minimumSymbol = functionArray.randomSymbol();
    minimumCount++;
  }

  // empty string for the for loop
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < parseInt(length) - minimumCount; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }

  // adding characters to password
  randomPasswordGenerated += minimumLower;
  randomPasswordGenerated += minimumUpper;
  randomPasswordGenerated += minimumNumber;
  randomPasswordGenerated += minimumSymbol;

  console.log(randomPasswordGenerated);

  return randomPasswordGenerated;
}

//                              Random Functions

// information function
// random functions into variables
var randomFunc = {
  cancel: 0,
  trackCancel: function () {
    if (this.cancel >= 4) {
      window.alert(
        "Please make sure to choose at least one character option. (Lower/Upper character, number and/or special character)."
      );
      this.cancel = 0;
      generatePassword();
    }
  },
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
