// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

let age = window.prompt("How old are you?");

// age += 1
// console.log(age) // 251 (because it's deal with stirngs) (expect 26)

age = Number(age)
age += 1 // to Number
console.log(age) // 26


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x) // NaN 'number'
console.log(y, typeof y) // pizza string
console.log(z, typeof z) // true 'boolean'

let x2 = "0";
let y2 = "0";
let z2 = "0";

x2 = Number(x2);
y2 = String(y2);
z2 = Boolean(z2);

console.log(x2, typeof x2) // 0 'number'
console.log(y2, typeof y2) // 0 string
console.log(z2, typeof z2) // true 'boolean'

let x3 = "";
let y3 = "";
let z3 = "";

x3 = Number(x3);
y3 = String(y3);
z3 = Boolean(z3);

console.log(x3, typeof x3) // 0 'number'
console.log(y3, typeof y3) //  string
console.log(z3, typeof z3) // false 'boolean'
// if user skip the input, it will be empty string which refers to false


let x4;
let y4;
let z4;

x4 = Number(x4);
y4 = String(y4);
z4 = Boolean(z4);

console.log(x4, typeof x4) // NaN 'number'
console.log(y4, typeof y4) // undefiend string
console.log(z4, typeof z4) // false 'boolean'