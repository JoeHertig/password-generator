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
function generatePassword() {
  getLength();
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
  getLower();
  // find random lower
  function getLower() {
    // validate if user would like lowercase characters.
    var promptLowerConfirm = window.confirm(
      "Would you like to include lowercase characters?"
    );
    if (promptLowerConfirm) {
      randomFunc.lower += 1;
      return promptLowerConfirm;
    } else {
      randomFunc.cancel += 1;
      console.log(randomFunc.cancel);
    }
  }
  getUpper();
  //find random upper character
  function getUpper() {
    var promptUpperConfirm = window.confirm(
      "Would you like to include uppercase characters?"
    );
    if (promptUpperConfirm) {
      randomFunc.upper += 1;
      return promptUpperConfirm;
    } else {
      randomFunc.cancel += 1;
      console.log(randomFunc.cancel);
    }
  }
  getNumber();
  //find random number
  function getNumber() {
    var promptNumberConfirm = window.confirm(
      "Would you like to include numbers?"
    );
    if (promptNumberConfirm) {
      randomFunc.number += 1;
      return promptNumberConfirm;
    } else {
      randomFunc.cancel += 1;
      console.log(randomFunc.cancel);
    }
  }
  getSymbol();
  // find random symbol/special character
  function getSymbol() {
    var promptSymbolConfirm = window.confirm(
      "Would you like to include special characters?"
    );
    if (promptSymbolConfirm) {
      randomFunc.symbol += 1;
      return promptSymbolConfirm;
    } else {
      randomFunc.cancel += 1;
      console.log(randomFunc.cancel);
    }
  }
  randomFunc.trackCancel();
}

//                              Random Functions
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

// information function
// random functions into variables
var randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
  // cancel: 0,
  // length: 0,
  // trackCancel: function () {
  //   if (this.cancel >= 4) {
  //     window.alert(
  //       "Please make sure to choose at least one character option. (Lower/Upper character, number and/or special character)."
  //     );
  //     this.cancel = 0;
  //     generatePassword();
  //   }
  // },
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
