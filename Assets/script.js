// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var getPasswordLength = function() {
  var passLength = "";
  while (passLength === "" || passLength === null) {
    var passLength = window.prompt("How many characters long do you want your password to be?");
  }
  passLength = parseInt(passLength);
  if (passLength < 8) {
    window.alert("Your password has to fit the parameter of 8 - 128 characters. Please try again.");
    getPasswordLength();
  } else if (passLength > 128) {
    window.alert("Your password has to fit the parameter of 8 - 128 characters. Please try again.");
    getPasswordLength();
  } else {
    console.log("You selected a password of " + passLength + " characters long.");
    return passLength;
  }
}

var confirmNumerical = function() {
  var wantNumeral = window.confirm("Do you want to use numerical values in your password?");
  return wantNumeral;
}

var confirmLower = function() {
  var wantLower = window.confirm("Do you want to use lowercase character in your password?");
  return wantLower;
}

var confirmUpper = function() {
  var wantUpper = window.confirm("Do you want to use uppercase character in your password?");
  return wantUpper;
}

var confirmSpecial = function() {
  var wantSpecial = window.confirm("Do you want to use special characters in the password?");
  return wantSpecial;
}

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}

var selectNumerical = function() {
  randomNumber(0,9);
  var numbers = "0123456789";
  var number = numbers[Math.floor(Math.random() * numbers.length)];
  return number;
}

var selectLower = function() {
  randomNumber(0,26);
  var totalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabet = totalAlphabet[Math.floor(Math.random() * totalAlphabet.length)];
  return alphabet;
}

var selectUpper = function() {
  randomNumber(0,26);
  var totalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabet = totalAlphabet[Math.floor(Math.random() * totalAlphabet.length)];
  return alphabet;
}

var selectSpecial = function() {
  randomNumber(0,11);
  var totalAlphabet = "!@#$%^&*-=+";
  var alphabet = totalAlphabet[Math.floor(Math.random() * totalAlphabet.length)];
  return alphabet;
}

var generatePassword = function() {
  window.alert("Let's make you a secure pasword!");
  var passInfo = {
    indexes: getPasswordLength(),
    numerical: confirmNumerical(),
    lowercase: confirmLower(),
    uppercase: confirmUpper(),
    special: confirmSpecial()
  }

  var empty = Array(passInfo.indexes);
  for (var i = 0; i < passInfo.indexes; i++) {
    // outputs 1 - 4
    // create a function containing an if statement with my confirmParameters truths
    var charType = randomNumber(1,4);
    debugger;
    switch (charType) {
      case 1:
        empty[i] = selectNumerical();
        break;
      case 2:
        empty[i] = selectLower();
        break;
      case 3:
        empty[i] = selectUpper();
        break;
      case 4:
        empty[i] = selectSpecial();
        break;
      default:
        window.alert("You must select at least one type of character");
    }
  }

  // console.log(empty);
  // for (var i = 0; i < passInfo.indexes; i++) {
  //   // var fakePassword[i] = empty.push(i);
  //   // console.log(fakePassword);
  // }
  // return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);