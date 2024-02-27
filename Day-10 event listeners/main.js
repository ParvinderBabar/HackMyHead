// const btn_clickme = document.querySelector("#Clickme")
const body = document.createElement("body");
// document.appendChild(body);
// btn_clickme.addEventListener("click", () =>
// {
//     console.log("clcik me");
//     const header = document.createElement("h1");
//     document.body.appendChild(header);
//     header.textContent = "hello";
//     btn_clickme.style.margin = Math.ceil(Math.random() * 1000) + "px";
// })
// const input_text = document.querySelector("#input");
// input_text.addEventListener("input",()=> {
//     console.log("you are typing.");
//     let isToggle = true;
//     if (isToggle) {
//         input_text.style.border = "10px solid black";
//     }
//     else {
//       input_text.style.border="0px solid black"   
//     }
//     isToggle = !isToggle;
// });
// input_text.removeEventListener("input", cb);
  const btnSubmit = document.querySelector("#submit");
// btnSubmit.addEventListener("click", () => {
//     console.log(input_text.value);
//     console.log("clicked");
// })
let form = document.querySelector("#form");
const input_text = document.querySelector("#input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input_text.value);
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
})