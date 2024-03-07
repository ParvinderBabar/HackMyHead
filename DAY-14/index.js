let dogArray = [
    { 
        name: "Victor",
        id: 1,
        image: "dog.jpg"
    }
];

const dogContainer = document.querySelector("#dog-container");
//  const select = document.querySelector("select");
   const select = document.querySelector("select");
select.addEventListener("change", (event) => {
    const id = +event.target.value; // Convert the selected value to a number
    const updatedClones = dogArray.filter((clone) => clone.id !== id); // Use clone.id instead of console.id
    dogArray = updatedClones;
    render();
});
function render() {
   
    dogContainer.innerHTML = "";
   
    select.innerHTML = "";
   
    
    for (let clone of dogArray) {
        const div = document.createElement("div"); // Create a new div for each dog
        div.className = "dog-clone";
        const h2 = document.createElement("h2");
        h2.textContent = clone.name;
        div.appendChild(h2);
        
        const p = document.createElement("p");
        p.textContent = `ID: ${clone.id}`;
        div.appendChild(p);
        
        const img = document.createElement("img");
        img.src = clone.image;
        div.appendChild(img);

        const button = document.createElement("button");
        button.textContent = "Clone!";
        div.appendChild(button);
        
        button.addEventListener("click", () => {
            // Increment the ID for the new dog
            const newId = dogArray.length + 1;
            // Clone the dog with the updated ID and add it to the array
            dogArray.push({ ...clone, id: newId });
            // Render again to update the list
            render();
        });
        
        dogContainer.appendChild(div); // Append the dog container to the dog container in the HTML
        const option = document.createElement("option");
        option.textContent = clone.id;
        select.appendChild(option);
    }
}

render();