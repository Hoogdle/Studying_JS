// IF STATEMENTS

let age = 13;

if(age >= 18){
    console.log("You are old enough to enter this site")
} else {
    console.log("You must be 18+ to enter this site")
}

let time = 14;

if(time < 12){
    console.log("Good morning!")
} else {
    console.log("Good afternoon!")
}

let isStudent = true;

if(isStudent){
    console.log("You are a student!")
} else {
    console.log("You are NOT a student!")
}

let ages = 25;
let hasLicense = false;

if(ages >= 16){
    console.log("You are old enough to drive")

    if(hasLicense){
        console.log("You have your license!")
    } else {
        console.log("You do not have your license yet!")
    }

} else {
    console.log("You must be 16+ to have a license")
}

age = -1

if(age >= 18){
    console.log("You are old enough to enter this site");
} 
else if(age < 0){
    console.log("Your age can't be below 0")
} 
else if (age>=100){
    console.log("Your are TOO OLD to enter this site")
} 
else {
    console.log("You mus te be 18+ to enter this site")
}


// Example
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement"); 

age = 0;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age) // all the get from website is string type


    if (age>=100){
        resultElement.textContent = "Your are TOO OLD to enter this site"
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site"
    } 
    else if(age < 0){
        resultElement.textContent = "Your age can't be below 0"
    }  
    else {
        resultElement.textContent = "You mus te be 18+ to enter this site"
    }
}