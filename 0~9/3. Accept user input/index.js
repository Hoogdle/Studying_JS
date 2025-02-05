// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;

// # Window prompt
//username = window.prompt("What's your username?") // show pop-up in website with blank to fill it

// suppose we enter "kim"
//console.log(username) // "kim"

// # HYML textbox(see the index.html)
// after clicked on button function(on the right) will act
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value
    document.getElementById("myH1").textContent = `Hello ${username}` // change the Head
    console.log(username);
}