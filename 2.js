// #Increment | Decrement
var myVar = 87;
myVar++ // possible 88
myVar-- // possible 87

// Decimal Number
var ourDecimal = 5.7;
var myDecimal = 0.009

// Multiply Decimal 
var product = 2.0 * 2.5;
console.log(product) // 5

// Divide Decimal
var quotient = 4.4 / 2.0;
console.log(quotient) // 2.2

// Remainder
var remainder;
remainder = 11 % 3; // 2

// Shortcut
var a = 3;
a += 2;
a -= 2;
a *= 2;
a /= 2; // whole things possible

// #String Variables
// single | double quotation marks all possible!
var firstName = "Alan";
var lastName = "Truing";

// double | single quote
// same with python
var myStr1 = "My name is 'Kim"
var myStr2 = 'They said "Hello!"'
// using '\'
var myStr3 = "They said \"Hello!\""

// \n : new line
// \r : carraige return
// \t : tab
// \b : back space
// \f : from feed

// #Concatnate String
// using '+'( += shorcut also possible)
var outStr = "I come first. " + "I come second.";
console.log(outStr) //I come first. I come second.

outStr += "I come third.";
console.log(outStr) //I come first. I come second.I come third.

// using variables( += shorcut also possible)
var s1 = "Kim"
var s2 = "Tae"
var s3 = "Yeong"
var fullName = s1 + s2 + s3
console.log(fullName); //KimTaeYeong

// #Find length of String
var lenghtOfStr = 0;
var firstName = "KimTaeYeong";
lenghtOfStr = firstName.length;
console.log(lenghtOfStr); // 11

// #Brack Notation 
// get a character at a specific index
// index is started with 0.
var firstName = "KimTaeYeong";
firstLetter = firstName[0];
lastLetter = firstName[firstName.length-1];
console.log(firstLetter,lastLetter); // K g

// #String Immutability
// Strings are immutable, cannot be alerted once created.
// more detail, "individual characters of a string cannot be changed."
var myStr = "Jello World";
myStr[0] = "H"; // not changed
console.log(myStr); // Jello World

myStr= "Hello World"; // correct way
console.log(myStr); // Hello World

// #Exercise
// make correct sentence by using given words.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";

    result += myAdjective + " ";
    result += myNoun + " ";
    result += myVerb + " ";
    result += myAdverb + " ";

    return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))