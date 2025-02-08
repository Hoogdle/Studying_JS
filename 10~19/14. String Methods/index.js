// String Method : allow you to manipulate and work with text (strings)

let userName = "BroCode";

// charAt() : get the character in index
console.log(userName.charAt(0)) // B
console.log(userName.charAt(1)) // r
console.log(userName.charAt(2)) // o

// indexOf() : get the index of character(first met)
console.log(userName.indexOf("o")) // 2

// lastIndeOf() : ge the index of character(last met)
console.log(userName.lastIndexOf("o")) // 4

// length : get the length of string
console.log(userName.length) // 7

// trim()
userName = "BroCode         "
userName = userName.trim()
console.log(userName) // BroCode

// toUpperCase()
userName = "BroCode"
userName = userName.toUpperCase
console.log(userName) //BROCODE

userName = userName.toLowerCase
console.log(userName) //brocode


// repeat()
userName = userName.repeat(3)
console.log(userName) // BroCodeBroCodeBroCode

// startsWith() 
userName = "BroCode";
let result = userName.startsWith(" ");
console.log(result) // false

userName = " BroCode"

result = userName.startsWith(" ");

if(result){
    console.log("Your username can't begin with ' '")
}
else {
    console.log(userName)
}

// endsWith()
// same as startsWith

// includes()

userName = "BroCode"

console.log(userName.includes("B")) //true
console.log(userName.includes("Z")) //false


// replaceAll
let phoneNumber = "123-456-7890"

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber) // 1234567890


// padStart()
// pad the strings untill to get the value which from paramter
phoneNumber = "123-456-7890"
phoneNumber = phoneNumber.padStart(15,"0")
console.log(phoneNumber) // 000123-456-7890

// padEnd()
// same as padStart, just put to end.
