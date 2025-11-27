

// The syntax of the character count or length of characters is below:

var myName = "Mark Ven Lambot"

// to show the length of the var myName

myName.length;

// The syntax of character slice is below

myName.slice(0,1);



// Character Casing syntax is 

var variableName = "mark ven";
variableName = variableName.toUpperCase();
variableName = variableName.toLowerCase();

// this is capitalization task
var myName = prompt("What is your name:")
var upperCaseFirstLetter = myName.slice(0,1);
upperCaseFirstLetter = upperCaseFirstLetter.toUpperCase();

var lowerCaseLetter = myName.slice(1,myName.length);
lowerCaseLetter = lowerCaseLetter.toLowerCase();

var capitalizeName = upperCaseFirstLetter + lowerCaseLetter;

alert(capitalizeName);

// Multiplication, Divide, and Modulo, modulo is the remainder, dogAge to humanAge task
var dogAge = prompt("How old is your Dog?:");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog age if it's a human is: " + humanAge);

// increment ++ and decrement --
var x = 5;
x++; 
x--;   

x+= 2;