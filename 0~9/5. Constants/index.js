// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

//pi = 420.69; // if someone changed pi? => have not good situations
// => so that we need const to restrict to change value
//PI = 420.69 // have error

// radius = window.prompt('Enter the radius of a Circle');
// radius = Number(radius);
// circumference = 2 * pi * radius

// console.log(circumference)

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    
    document.getElementById("myH3").textContent = circumference + "cm";
}
