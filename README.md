# Secure Password Generator
## Description
The objection of this program is to generate a password constructed from user input that is then returned to the interactive interface. Starter code was provided that contained the necessary HTML and CSS; however, all JavaScript logic had to be written. Using bullet points I wrote out my general logic that I then turned into pseudocode and eventually into JavaScript. 

## Built With:
* HTML
* CSS
* JavaScript

## Key Features:
### Utilizing Objects for Organization
When the button is clicked, the JavaScript logic runs a function generatePassword() that constructs an object titled passInfo, which contains necessary information given by the user. For this object, the properties are calling various functions that will return required data such as password length and what character types to include.

The first of these object property functions ask the user for the password length, checks that it is within the restraints of 8 <= password <= 128, and ensures the user did not leave the prompt empty/null.

The remaining four property functions return boolean logic from the user that decides if numerals, lowercase, uppercase, and/or special characters should be included in the password. If all four boolean conditions return false, then the user is reminded that the password has to contain at least one data type and returns the user to the beginning of the generatePassword() function.

![A screenshot showing the use of JavaScript objects and properties](/Assets/images/objectREADME.png)
![A screenshot showing the object property functions and what data they provide for the code logic](/Assets/images/propertyFunctions.png)

### Switch Statements for Logic
Once the passInfo object contains all its data. An empty array titled *empty* is created at a length equal to the user input stored under passInfo.indexes. A for loop then contains the following logic:
* For every index in this array, a random number between 1-4 is assigned. These numbers represent the character typers: (1) numericals (2) lowercase (3) uppercase and (4) special. 
* A switch case is then used to link the assigned number with the character type. If passInfo.characterType is true, then a function selectCharacterType() runs to assign a random character to that index of the empty array.
* If the passInfo.characterType is false, then the for loop counter is decremented by one. You then break back to the top of the for loop where the counter is incremented by one- essentially keeping you at the exact same index you just were at. It then would re-run the for loop until a passInfo.characterType is true and can continue to the next index.
* Once the array is full, the empty array is returned to the user on the interactive interface.

![A screenshot of the switch case logic used to decide what character types are used in the password](/Assets/images/switchCase.png)

## Limitations
While the logic works, I understand how this computational method could be cumbersome or perhaps compute slower than other methods of generating a random password due to how I decided to utilize a switch case and manipulate the counter. Instead of somehow telling the computer, if charType 2 (which represents lowercase) is false then never populate the option to include it- I keep the for loop running on the same index until a valid character type is randomly computed. I did ponder other ways to create the password but thought this logic would be unique when compared to the other students' code so I stuck with it.

View the live page [here](https://ahudg.github.io/secure-password-gen/)

## Contributions
Made by Andrew Hudgins :) 
