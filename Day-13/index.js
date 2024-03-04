import { alienPlanets } from './alien-planet.js';

const header = document.createElement("h1");
header.textContent = "Is there life out there?";
document.body.appendChild(header);

const outersquare = document.createElement("div");
outersquare.setAttribute("id", "outersquare");
outersquare.style.display = "flex";
outersquare.style.justifyContent = "center";
outersquare.style.alignItems = "center";
outersquare.style.width = "100%"; // Adjust width to fit the content
document.body.appendChild(outersquare);

alienPlanets.forEach(planet => {
    const square = document.createElement("div");
    square.classList.add("square");
    // square.textContent = planet.name;
    // square.textContent.style = "center";
    square.style.border = "2px solid black";
    square.style.width = "100px";
    square.style.height = "130px";
    square.style.borderRadius = "10px";
    square.style.margin = "15px";
    const header3 = document.createElement("h3");
    header3.textContent = planet.name;
    header3.style.display = "flex";
    header3.style.justifyContent = "center";
    header3.style.alignItems = "center";
    header3.style.margin= "5px";


    square.appendChild(header3);

    const header2 = document.createElement("h3");
    header2.textContent = planet.emoji;
     header2.style.display = "flex";
    header2.style.justifyContent = "center";
    header2.style.alignItems = "center";
    header2.style.margin = "5px";

    square.appendChild(header2);
    outersquare.appendChild(square);
});