// #arrays: list of values stored in one variable
const fishes = ["bubbly", "nemo", "neptune", "fin"];
console.log(fishes);
console.log(fishes[0]);
fishes.push("gill");
console.log(fishes);
const select = document.querySelector("select");
const placeholder = document.createElement("option");
select.appendChild(placeholder);
placeholder.textContent = "Please choose a fish!";
select.addEventListener("change", (e) => {
    console.log(e.target.value);
});
 

for (let fish of fishes) {
    console.log(fishes);
    const option = document.createElement("option");
    option.textContent = fish;
  select.appendChild(option);
}
fishes.pop();
 let sum = 0;
const grades = [10, 20, 30, 50, 40];
// mutating - changing the orginial value

grades.splice(1, 1);
// for (let i = 0; i < grades.length; i++){
//     // console.log(grades[i]);
   
//     sum += grades[i];
//     console.log(sum);
// }

for (let num of grades) {
    sum = sum + num
}
average = sum / grades.length;
console.log(average);
for (let char of "david") {
    console.log(char);
}
let newfishes = [];
for (let name of fishes) {
    if (name !== "nemo") {
        newfishes.push(name);
      
    }
}
     console.log(newfishes);
   

