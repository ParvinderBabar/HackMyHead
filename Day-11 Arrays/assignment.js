const body = document.getElementById("body");

//heading day-11
const arr = document.createElement("h1");
    document.body.appendChild(arr);
    arr.setAttribute("id", "arr");
arr.textContent = "Day-11 Array";
    arr.style.display = "flex";
arr.style.justifyContent = "center";
  
//button to generate number

    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.setAttribute("id", "randomNumber");
btn.textContent = "Generate an array random number between 1 and 100!";
// const btn = document.getElementById("randomNumber");
btn.style.display = "flex";
btn.style.justifyContent = "center";
   
btn.addEventListener("click", () => {
    let randomArray = [];
    let totalnum = 10;
    for (let i = 0; i < 10; i++) {
        console.log(Math.ceil(Math.random() * 100));
        randomArray.push(Math.ceil(Math.random() * 100));

    }
    console.log(randomArray);
    btn.style.visibility = "hidden";



    //creater h1 to display random numbers 
   
 
    const header = document.createElement("h1");
    document.body.appendChild(header);
    header.setAttribute("id", "header1");
    header.textContent = `[${randomArray}]`;
    header.style.display = "flex";
    header.style.justifyContent = "center";
    



    const btncontainer = document.createElement("div");
    document.body.appendChild(btncontainer);
    btncontainer.setAttribute("id", "button-container");
    btncontainer.style.display = "flex";
    btncontainer.style.justifyContent = "center";
    btncontainer.style.flexWrap = "wrap";



    // btncontainer.textContent = `Display the first number!`;
    const first = document.createElement("button");
    document.body.appendChild(first);
    first.setAttribute("id", "first");
    
    first.textContent = "Display the first number!"
    first.addEventListener("click", () => {
        header.textContent = `${randomArray[0]}`;
        
    })
    //
    const addRandom = document.createElement("button");
    document.body.appendChild(addRandom);
    addRandom.setAttribute("id", "addRandom");
    addRandom.textContent = "Add a random number!"
    addRandom.style.margin = "10px"
    addRandom.style.display = "inline";
    addRandom.addEventListener("click", () => {
        randomArray.push(Math.ceil(Math.random() * 100));
        header.textContent = `[${randomArray}]`;
    })
    

    //3
    const bear = document.createElement("button");
    document.body.appendChild(bear);
    bear.setAttribute("id", "bear");
    bear.textContent = "🐻"
    bear.style.margin = "10px"
    bear.style.display = "inline";
   
    bear.addEventListener("click", () => {
         randomArray = [];
        for (let i = 0; i < 10; i++) {
           
           randomArray.push("🐻");
        }
        header.textContent = `[${randomArray}]`;
    })
    
    //4
    const reverse_it = document.createElement("button");
    document.body.appendChild(reverse_it);
    reverse_it.setAttribute("id", "reverse_it");
    reverse_it.textContent = "Reverse it!"
    reverse_it.style.margin = "10px"
    reverse_it.style.display = "inline";
    reverse_it.addEventListener("click", () => {
        
        const reverse = randomArray.reverse();
        //  reverse_it.textContent = reverse;
        header.textContent = `[${reverse}]`;
         
    })
    //5
    const select = document.createElement("select");
    document.body.appendChild(select);
    const placeholder = document.createElement("option");
     select.appendChild(placeholder);
    placeholder.textContent = "Remove a number!";
      for (let num of randomArray) {
           const option = document.createElement("option");
            option.textContent = num; 
            select.appendChild(option); 
        }
   
    select.addEventListener("change", (e) => {
        const selectedValue = parseInt(e.target.value); // Convert the selected value to a number
        const index = randomArray.indexOf(selectedValue); // Find the index of the selected value
        if (index !== -1) { // Check if the value exists in randomArray
            randomArray.splice(index, 1);
            // Remove the value from randomArray
            header.textContent = `[${randomArray}]`; // Update the display with the modified array
        }
  const options = document.querySelectorAll("option");
        for (let opt of options) {
            if (parseInt(opt.value) === selectedValue) {
                console.log(opt.value);
                opt.remove();
                break;
            }
        }
    });
   
    select.style.margin = "10px"
    select.style.display = "inline";
    //6
    const highest_number = document.createElement("button");
    document.body.appendChild(highest_number);
    highest_number.setAttribute("id", "highest_number");
    highest_number.textContent = "Show the highest number!"
    highest_number.margin = "10px"
    highest_number.style.display = "inline";
    highest_number.addEventListener("click", () => {
       let high_number = 0;
    for (num of randomArray)
    {
        if (high_number < num) {
            high_number =num;
        }
        console.log(high_number);
        }
      header.textContent = `[${high_number}]`;
    // header 
    })
    

    
    //7 
    const Fizzbuzz = document.createElement("button");
    document.body.appendChild(Fizzbuzz);
    Fizzbuzz.setAttribute("id", "Reset");
    Fizzbuzz.textContent = "Fizzbuzz"
    Fizzbuzz.style.margin = "10px"
    Fizzbuzz.style.display = "inline";
    //   output.push("🫧✨");
    let output=[]
    Fizzbuzz.addEventListener("click", () => {
        for (num of randomArray) {
            if (num % 3 === 0 && num % 5 === 0) {
                output.push("🫧✨");
               
            }
            else if(num % 3 === 0)
            {  output.push("🫧");
              
            }
            else if(num % 5 === 0)
            {
                output.push("✨");
            }
            else {
                output.push(num);
                console.log(num);
            }
            
        }

        header.textContent=`[${output}]`
    })
    //8
    const heart = document.createElement("button");
    document.body.appendChild(heart);
    heart.setAttribute("id", "heart");
    heart.textContent = "❤️"
    heart.style.margin = "10px"
    heart.style.display = "inline";
    //9
    const Reset = document.createElement("button");
    document.body.appendChild(Reset);
    Reset.setAttribute("id", "Reset");
    Reset.textContent = "Reset"
    Reset.style.margin = "10px"
    Reset.style.display = "inline";
  
   
      const buttons = document.querySelectorAll('button');
    Reset.addEventListener("click", () => {
        randomArray = [];
      
       
       
        for (let i = 1; i < 11; i++) {

            randomArray.push(Math.ceil(Math.random() * 100));
        }
         header.textContent=`[${randomArray}]`

    });
    
});    


