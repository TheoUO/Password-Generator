// Set up my variables first
var characterlength = 8;
var options = [];

//set up my characters in an array
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', '{', ']', '}', '<', '>', '?', '/']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];

// Assignment code here
//  a. Password length between 8 and 128
//  b. Prompt Lowercase, uppercase, numbers or special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// I need to create a generatePassword function
function generatePassword() {

}
