let Homebtn = document.querySelector(".home");
console.log('Homebtn');

let Redbtn = document.querySelector(".red");
let Orangebtn = document.querySelector(".orange");
let Purplebtn = document.querySelector(".purple");
let Greenbtn = document.querySelector(".green");

let toggleNavStatus = false; //Status navigatie: False=menu is hidden

let getColorMnu =  document.getElementById("colorMnu");
console.log('getColorMnu');

let getToggleMnu = document.getElementsByClassName("toggleMnu");

document.querySelector(".home").onclick = function() {togglecolor('grey')};
document.querySelector(".red").onclick =  function() {togglecolor('red')};
document.querySelector(".orange").onclick = function() {togglecolor('orange')};
document.querySelector(".purple").onclick = function() {togglecolor('purple')};
document.querySelector(".green").onclick = function() {togglecolor('green')};
document.querySelector(".toggleMnu").onclick =  function() {toggleMnustat()};


function togglecolor(color) {
    document.body.style.background = color;
    
    document.getElementById("colorMnu").style.visibility = "visible";
}

function toggleMnustat() {
  if (document.getElementById("colorMnu").style.visibility == "hidden") {
      document.getElementById("colorMnu").style.visibility = "visible";
}
  else { 
    document.getElementById("colorMnu").style.visibility = "hidden";
  };
}