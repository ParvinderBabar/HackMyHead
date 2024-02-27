const body = document.createElement("body");
const header = document.createElement("h1");
header.textContent = "DAY 10";
header.style.fontWeight = "bold";
document.body.appendChild(header);


const br = document.createElement("hr");
// br.textContent = "DAY 10";
br.style.fontWeight = "bold";
document.body.appendChild(br);

//toggle the box.square .onclick blue color

const header1 = document.createElement("h1");
header1.textContent = "TOGGLE THE BOX";
header1.style.fontWeight = "bold";
document.body.appendChild(header1);
// WORK ON SQUARE BOX
const square = document.createElement("div");
square.setAttribute("id", "bluesquare");
square.style.width = "30px";
square.style.height = "30px";
document.body.appendChild(square);
 let isToggle = true;
square.addEventListener("click", () => {
    console.log("clicked on square");
   
    if (isToggle) {
      
        square.style.backgroundColor = "blue";
        
    }
    else {
        square.style.backgroundColor = "pink";
    }  
      isToggle = !isToggle;
       
});


// #WOKRING ON MIRROR .FILL INPUT AND DISPLAY <OUTPUT></OUTPUT>
const br2 = document.createElement("hr");
br2.style.fontWeight = "bold";
document.body.appendChild(br2);
//HEADER-MIRROR
const mirror = document.createElement("h1");
mirror.textContent = "MIRROR";
mirror.style.fontWeight = "bold";
document.body.appendChild(mirror);

const input = document.createElement("input");
input.setAttribute("id", "input");
document.body.appendChild(input);
input.style.marginTop = "10px";
input.addEventListener("input", () => {
    console.log(input.value);
      if (para) { // Check if the element is found before manipulating it
            para.textContent = input.value;
            para.style.fontWeight = "bold";
            // para.style.border = "1px solid black";
            document.body.appendChild(para);
        }
});

const h4 = document.createElement("h1");
h4.setAttribute("id", "h4");
h4.textContent = "Race";
document.body.appendChild(h4);

const para1 = document.createElement("p");
para1.setAttribute("id", "para1");
para1.textContent = "Move car to the right by pressing the right arrow ";
document.body.appendChild(para1);
//para1.style.fontSize = "20px";



const carRace = document.createElement("div");
carRace.setAttribute("id", "carRace");
document.body.appendChild(carRace);
carRace.textContent ="🏎";

carRace.style.marginTop = "-50px";
carRace.style.marginLeft= "50px";

carRace.style.fontSize = "100px";
carRace.style.position = "absolute";
let carPosition = 0;
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        carPosition += 10; // Adjust the amount of movement as needed
        carRace.style.left = carPosition + "px"; // Update the car's position
        // Code to move the car forward
        console.log("Right arrow key pressed");
        // Add your logic to move the car forward here
    }
});



// /working on stop watch
const br5 = document.createElement("hr");
br5.style.fontWeight = "bold";
document.body.appendChild(br5);

//STOP-WATCH

const h5 = document.createElement("h1");
h5.textContent = "Stop Watch";
body.appendChild(h5);
// 🐇

let countdown = 0; // Initial countdown value

const msg = document.createElement("p");
document.body.appendChild(msg);
// msg.style.background = "black";
msg.style.color = "green";
msg.style.fontSize = "90px";
msg.textContent = " "+countdown + " seconds";


const start = document.getElementById("start");
const stop = document.getElementById("stop");
const clear = document.getElementById("clear");
let timerId;
start.addEventListener("click", ()=>
{
  
    timerId=setInterval(function () {
        msg.textContent = " " + countdown + " seconds";
        countdown++;
    }, 1000);

});
stop.addEventListener("click", ()=>
{
clearInterval(timerId);

});
clear.addEventListener("click", () => {
     clearInterval(timerId);
    countdown = 0;
      msg.textContent = "0 seconds"; 
 });







