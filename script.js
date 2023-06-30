// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numeric = '0123456789'
var specialCharacter = '!@#$%^&*()-_=+`~[]{}/?\|'

function generatePassword() {
  // 1. Prompt the user for the password criteria
  
   
  //  a. Password length between 8 and 128
  //  b. Prompt Lowercase, uppercase, numbers or special characters
  // 2. Validate the input
  // 3. Generate password based on criteria
  // 4. Display password to the page

  return 'Generated password will go here!';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
