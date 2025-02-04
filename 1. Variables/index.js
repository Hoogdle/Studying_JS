// variable = A container that stores a value.
//              Behaves as if it were the value it contains.

// 1. declaration       let x;
// 2. assignment        x = 100;

// let x;
// x = 123;

// let y = 123;

// console.log(x);

let age = 25;
let price = 10.99;
let gpa = 4.5;
let userName = "Kim";
let favoriteFood = "sushi";
let email = "Bro@Gamil.com";

// ${} only possible in 'back-tik' (``)
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is : ${gpa}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

// check type
console.log(typeof userName) // string
console.log(typeof age) // number
console.log(typeof gpa) // number

// boolean
let online = true;
let forSale = true;
let isStudent = true;

console.log(online); // true
console.log(`Bro is online : ${online}`);
console.log(`Is this car for slae : ${forSale}`);
console.log(`Enrolled : ${isStudent}`);


// Excersize

let fullName = "Kim Taeyeong";
let ages = 25;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${ages}`;
document.getElementById("p3").textContent = `Enrolled : ${student}`;
