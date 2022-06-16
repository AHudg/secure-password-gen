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
    return getPasswordLength();
  } else if (passLength > 128) {
    window.alert("Your password has to fit the parameter of 8 - 128 characters. Please try again.");
    return getPasswordLength();
  } else {
    console.log("You selected a password of " + passLength + " characters long.");
    return passLength;
  }
}

var confirmNumerical = function() {
  var wantNumeral = window.confirm("Do you want to use numerical values in your password?");
  return wantNumeral;
}

var selectNumerical = function() {
  var possibleChars = "0123456789";
  var selectedChar = possibleChars[randomNumber(0,possibleChars.length-1)];
  return selectedChar;
}

var confirmLower = function() {
  var wantLower = window.confirm("Do you want to use lowercase character in your password?");
  return wantLower;
}

var selectLower = function() {
  var possibleChars = "abcdefghijklmnopqrstuvwxyz";
  var selectedChar = possibleChars[randomNumber(0,possibleChars.length-1)];
  return selectedChar;
}

var confirmUpper = function() {
  var wantUpper = window.confirm("Do you want to use uppercase character in your password?");
  return wantUpper;
}

var selectUpper = function() {
  var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var selectedChar = possibleChars[randomNumber(0,possibleChars.length-1)];
  return selectedChar;
}

var confirmSpecial = function() {
  var wantSpecial = window.confirm("Do you want to use special characters in the password?");
  return wantSpecial;
}

var selectSpecial = function() {
  var possibleChars = "!@#$%^&*-=+";
  var selectedChar = possibleChars[randomNumber(0,possibleChars.length-1)];
  return selectedChar;
}

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
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

  if ((!passInfo.numerical) && (!passInfo.lowercase) && (!passInfo.uppercase) && (!passInfo.special)) {
    alert("You must select at least one type of character to comprise your password.");
    return generatePassword();
  }

  var empty = Array(passInfo.indexes);
  for (var i = 0; i < passInfo.indexes; i++) {
    var charType = randomNumber(1,4);
    switch (charType) {
      case 1:
        if (passInfo.numerical) {
          empty[i] = selectNumerical();
        }
        else {
          i--;
        }
        break;
      case 2:
        if (passInfo.lowercase) {
          empty[i] = selectLower();
        }
        else {
          i--;
        }
        break;
      case 3:
        if (passInfo.uppercase) {
          empty[i] = selectUpper();
        }
        else {
          i--;
        }
        break;
      case 4:
        if (passInfo.special) {
        empty[i] = selectSpecial();
        }
        else {
          i--;
        }
        break;
      default:
        window.alert("You must select at least one type of character");
    }
  }
  console.log(empty);
  return empty.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);