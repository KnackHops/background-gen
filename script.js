var h3h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");

colorChange();

function colorChange(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
    h3h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);