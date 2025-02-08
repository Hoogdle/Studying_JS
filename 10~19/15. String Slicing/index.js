// String Slicing = creating a substring
//                  from a portion of another string

//  string.slice(start, end)

let fullName = "Bro Code";

// indexing is same as python(last one excluded)
// if not provide ending index, automatically go to end of string
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4,fullName.length);

console.log(firstName)
console.log(lastName)

let firstChar = fullName.slice(0,1);
console.log(firstChar) //B

let lastChar = fullName.slice(-1)
console.log(lastChar) //e




// slicing with dynamic method
fullName = "Broseph Code"
firstName = fullName.slice(0,fullName.indexOf(" "))
console.log(firstName) // Broseph

lastName = fullName.slice(fullName.indexOf(" "));
console.log(lastName) // " Code"

lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName) // "Code"


// Exercise
const email = "Bro1@gmail.com"

let userName = email.slice(0,email.indexOf("@"));
console.log(userName) // Bro1

let extension = email.slice(email.indexOf("@")+1);
console.log(extension) // gmail.com
