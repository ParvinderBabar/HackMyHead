const dragons = [{
    id: 1,
    emoji: "🐉",
    name: "Draco",
    species: "Fire Dragon",
    color: "Red",
},{
    id: 2,
    emoji: "🐲",
    name: "Drag",
    species: "Fire Dragon",
    color: "Red",
},{
    id: 3,
    emoji: "🔥",
    name: "Flame",
    species: "Fire Dragon",
    color: "Orange",
},{
    id: 4,
    emoji: "🌪️",
    name: "Twister",
    species: "Air Dragon",
    color: "Blue",
},{
    id: 5,
    emoji: "💧",
    name: "Splash",
    species: "Water Dragon",
    color: "Blue",
}];
let selectedDragon = dragons[0];

const select = document.querySelector("select");
 for (let dragon of dragons) {
        const option = document.createElement("option");
        option.textContent = dragon.name;
        option.value = dragon.id; // Set the value attribute to the dragon ID
        select.appendChild(option);
    }
select.addEventListener("change", (e) => {
    const dragonId = parseInt(e.target.value); // Parse the value to an integer
    selectedDragon = dragons.filter(dragon => dragon.id === dragonId)[0];
    render();
    
});
function render() {
   
   const div = document.querySelector("#dragon-container");
    // div.textContent = JSON.stringify(selectedDragon);
    const { id, emoji, species } = selectedDragon;
const pId = document.createElement("p");
pId.textContent = `id:${id}`;
div.appendChild(pId);

const pemoji = document.createElement("p");
pemoji.textContent = `emoji:${emoji}`;
div.appendChild(pemoji);
const pspecies = document.createElement("p");
pspecies.textContent = `species:${species}`;
div.appendChild(pspecies);
// div.textContent = "Dragon not found";
    


};
render(); // Initial rendering 


