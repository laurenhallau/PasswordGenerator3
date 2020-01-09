//Start by defining the length of user password
var passwordLength = prompt("How long do you want your password to be? Enter a number between 8 and 128."); 

if (passwordLength < 8|| passwordLength > 128) {
    alert("Please enter a number between 8 and 128!");
}

//Determining the characters the user wants
var SpecialChars = confirm("Would you like to include special characters in your password?");
var NumericalChars = confirm("Would you like to include numbers in your password?");
var lowerCaseChars = confirm("Would you like to include lower case letters in your password?");
var upperCaseChars = confirm("Would you like to include upper case letters in your password?");

//Generate Random Password
function generate () {

    //declaring variables
var SpecialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var NumericalChars = "0123456789";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newPassword = "";

//if statements


}







