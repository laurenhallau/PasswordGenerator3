//Start by defining the length of user password
var passwordLength = prompt("How long do you want your password to be? Enter a number between 8 and 128."); 
console.log("Your password is" + passwordLength);
    if (passwordLength < 8|| passwordLength > 128) {
        alert("Please enter a number between 8 and 128!");
}

//Determining the characters the user wants
var wantSpecial = confirm("Would you like to include special characters in your password?");
console.log(wantSpecial);

var wantNumber = confirm("Would you like to include numbers in your password?");
console.log(wantNumber);

var wantLower = confirm("Would you like to include lower case letters in your password?");
console.log(wantLower);

var wantUpper = confirm("Would you like to include upper case letters in your password?");
console.log(wantUpper);


//Generate Random Password
function generate() {

    //declaring variables
    var all = ' ';
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numericalChars = "0123456789";
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = " ";
    

//if statements
if (wantSpecial === true) {
    all += specialChars;
}
if (wantNumber === true) {
    all += numericalChars;
}
if (wantLower === true) {
    all += lowerCaseChars;
}
if (wantUpper === true) {
    all += upperCaseChars;
}
else if (wantSpecial === false && wantNumber === false && wantLower === false && wantUpper === false) {
    alert("Please select at least one type of character!");
    return null;
}

    for(var i = 0; i < passwordLength; i++) {
        var randomPick = all[Math.floor(Math.random() * all.length)]
        password += randomPick;
        }
        console.log(password);
        var blankInput = document.querySelector("#displayPass");
        blankInput.value = password;
    }
    generate ()
