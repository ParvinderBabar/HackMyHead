// const h1 = document.createElement("h1");
// h1.setAttribute("id", "header")
// const body = document.createElement("div");
// body.append(h1);
// h1.textContent = "1";
const h1 = document.createElement("h1");
h1.setAttribute("id", "header");
h1.textContent = "1";



const body = document.createElement("div");
body.appendChild(h1);
document.body.appendChild(body);

const border = document.createElement("hr");
body.appendChild(border);
border.style.border = " solid gray 1px ";


const square = document.createElement("div");
square.setAttribute("id", "square");
body.appendChild(square);
 square.style.display = "flex";

const h2 = document.createElement("h1");
h2.textContent = "2";
body.appendChild(h2);

const border2 = document.createElement("hr");
body.appendChild(border2);

const image = document.createElement("img");

// image.src = "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=9f146e09eed275511b156916db118ec9bb70a2da";
// body.appendChild(image);

border2.style.border = " solid gray 1px ";
const h3 = document.createElement("h1");
h3.textContent = "3";
body.appendChild(h3);

const border3 = document.createElement("hr");
body.appendChild(border3);
border2.style.border = " solid gray 1px ";

const squareContainer = document.createElement("div");
// square.className="redsquare";

for (let i = 1; i <= 100; i++){
const square = document.createElement("div");
square.className="redsquare";
squareContainer.appendChild(square);
    squareContainer.style.display = "flex";
    squareContainer.style.flexWrap = "wrap";
    squareContainer.style.gap = "5px";

    // square.style.color = "red";
   
}
body.appendChild(squareContainer);
const h4 = document.createElement("h1");
h4.textContent = "4";
body.appendChild(h4);
// h4.appendChild(squareContainer);


const border4 = document.createElement("hr");
body.appendChild(border4);
border4.style.border = " solid gray 1px ";
 
const divGhost = document.createElement("div");
divGhost.setAttribute("id", "ghost");



document.body.appendChild(divGhost);
divGhost.textContent ="👻";
divGhost.style.visibility = "hidden";
divGhost.style.visibility = "visible";
divGhost.style.fontSize = "100px";
// Function to toggle the visibility of the ghost

    
setInterval(function toggleGhostVisibility() {
    // Toggle between "hidden" and "visible" visibility states
    if (divGhost.style.visibility === "hidden") {
        divGhost.style.visibility = "visible";
    } else {
        divGhost.style.visibility = "hidden";
    }
}, 1000); // Toggle every second (1000 milliseconds)





const h5 = document.createElement("h1");
h5.textContent = "5";
body.appendChild(h5);
// 🐇

let countdown = 100; // Initial countdown value

const msg = document.createElement("p");
document.body.appendChild(msg);
msg.style.background = "black";
msg.style.color = "red";
msg.style.fontSize = "90px";
msg.textContent = "This page will self-destruct in " + countdown + " seconds";


setInterval(function() {
    countdown--;
    msg.textContent = "This page will self-destruct in " + countdown + " seconds";
   
     if (countdown < 0) {
         clearInterval(); // Stop the interval once countdown reaches zero
        for (let i = 0; i < Infinity; i++) {
            const bomb = document.createElement("span");
            bomb.textContent = "💣";
            document.body.appendChild(bomb);
        }
        msg.style.color = "red"; // Change text color to red
    }
   
}, 100);
 








