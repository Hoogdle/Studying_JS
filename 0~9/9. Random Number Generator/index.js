// RANDOM NUMBER GENERATOR

// create Random number
// let randomNum = Math.random(); // make random number between 0~1
// console.log(randomNum) // 0.5612067999641615

// // random 1~6
// randomNum = Math.floor(Math.random() * 6) + 1 // 1~6
// console.log(randomNum)
 
// // random 1~100
// randomNum = Math.floor(Math.random() * 100) +1 // 1~100
// console.log(randomNum)

// // set-up (for 50 ~ 100)
// const min = 50;
// const max = 100;

// randomNum = Math.floor(Math.random()* (max - min)) + min
// console.log(randomNum)

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min
    randomNum2 = Math.floor(Math.random() * max) + min
    randomNum3 = Math.floor(Math.random() * max) + min
    labe1.textContent = randomNum1;
    labe2.textContent = randomNum2;
    labe3.textContent = randomNum3;
}
