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

function userPrompts() {
  characterLength = parseInt(prompt('How many characters would you like your password to contain'))

  if (isNaN(characterLength) || characterlength < 8 || characterLength > 128) { //incase the user fails to use a numeric input
    alert('Please use numbers 8 - 128!')
    return false;
  }

  if (confirm('Do you want your password to contain lowercase letters')) {
  options = options.concat(lowerCase);
  }

  if (confirm('Do you want your password to contain uppercase letters')) {
    options = options.concat(upperCase);
    }

  if (confirm('Do you want your password to contain special characters')) {
      options = options.concat(specialCharacter);
      }

  if (confirm('Do you want your password to contain numeric figures')) {
        options = options.concat(numeric);
        }
  return true;
}