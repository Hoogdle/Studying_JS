// #console.log
console.log("Hello from JavaScript") // Hello from JavaScript(in terminal)

// #comment
//(1) '//'
//(2) '/* */'


// #DataTypes
// 7-data-tyeps are provided 
// (1) undefined : not yet defined. e.g. you make some variable but you didn't put anything yet.
// (2) null : nothing. e.g. you setted something to them but that is nothing at all.
// (3) boolean :true or false
// (4) string : text
// (5) symbol : 'immutable primitive value' that is unique
// (6) number : just number
// (7) object :store a lot of different key value pairs.

// #Variables

// 3-ways variables can be declared in Js.

// (1) var
// we can set the any of datatype to 'var'
// able to be used throughout my whole program
// we can change value
var myName = "Kim"
myName = 8

//(2) let
// only be used within the scope it declared.
let ourName = "Hoogdle"

//(3) const
// shouldn't be change. 
const pi = 3.14


// +a) all line sholud to be(not must!) end with 'semicolon(;)'
// +a) of course you can skip the semicolon but not it's not recommended

// #Storing Value with Assignment Operator
// 'delcaring variables' vs 'assigning variables'
var a;
var b =2;
console.log(a) // => undefined

a = 7;
b = a;

// +a) console.log
// allow us to see thing in the console.
console.log(a) // => 7

// #example of operation
var a = 5;
var b = 10;
var c= "I am a";

a = a + 1; // 6
b = b + 5; // 15
c = c + "String!"; // "I am a String!"

// #Case Sensitivity in Variables.
// JS regard Capital and small letter diffrenetly.
// in pratice, 'Camle Case' usually used.

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000

// #Adding | Subtraction | Multiplecation | Dividing numbers
// very straigtforward

var sum = 10 + 10;
console.log(sum) // 20

var difference = 45- 33;
console.log(difference) // 12

var product = 8*10;
console.log(product) // 80

var quotient = 66 / 33;
console.log(quotient) // 2