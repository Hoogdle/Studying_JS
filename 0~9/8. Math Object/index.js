// Math(object) = built-in object that provoides a
//                collection of properties and methods

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045

let x = 3.21;
let y = 2;
let z;

// round
z = Math.round(x);
console.log(z) // 3

// round-down
z = Math.floor(x);
console.log(z) // 3

// round-up
z = Math.ceil(x);
console.log(z) // 4

// truncate
z = Math.trunc(x);
console.log(z) // 3

// pow
z = Math.pow(x,y);
console.log(z) // 10.3041

// sqrt
z = Math.sqrt(x,y);
console.log(z) // 1.7916472867168918

// log
z = Math.log(x,y);
console.log(z) // 1.1662709371419244

// sin, cos, tan
z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);

// abs
z = Math.abs(x);

// sign (return -1 | 0 | 1 , according to given number)
z = Math.sign(x);
console.log(z) // 1

// max, min

let t1 = 3;
let t2 = 2;
let t3 = 1;

let max = Math.max(t1,t2,t3)
console.log(max) // 3

let min = Math.min(t1,t3,t3)
console.log(min) // 1
 


 

