
document.addEventListener("DOMContentLoaded", function () {
    const person = { name: "max", money: 0, dogs: 0, laptop: 0 };

    const jsonStringPre = document.createElement("pre");
    jsonStringPre.textContent = JSON.stringify(person, null, 2);
    document.body.appendChild(jsonStringPre);


    const updateJSONString = () => {
        jsonStringPre.textContent = JSON.stringify(person, null, 2);
    }


    const buy_dog = document.querySelector("#buy-dog");
     const para_buy = document.querySelector(".para");
    buy_dog.addEventListener("click", () => {
       
        
        if (person.money < 100) {
            para_buy.textContent = "Need $100 to buy a new dog";
        } else if (person.money >= 100) {
            person.dogs++;
            person.money -= 100;
            console.log(person.dogs);
            console.log(person.money);
        }
        updateJSONString();
    });

    const dog_dies = document.querySelector("#dog-dies");
    dog_dies.addEventListener("click", () => {
        
        if (person.money === 0 && person.dogs === 0) {
            para_buy.textContent = "You have no dogs to die!";
            
           
            console.log(person.dogs);
        }
        else if (person.money > 0 && person.dogs === 0)
        {
             para_buy.textContent = "You have no dogs to die!";
            }
            else {
            person.dogs--;
          
        }
        updateJSONString();
    });

    const buy_laptop = document.querySelector("#buy-laptop");
    buy_laptop.addEventListener("click", () => {
        
        if (person.money < 1000) {
            para_buy.textContent = "Need $1000 to buy a new laptop";
        } else if (person.money >= 1000) {
            person.laptop++;
            person.money -= 1000;
            console.log(person.laptop);
            console.log(person.money);
        }
        updateJSONString();
    });

    const earn_money = document.querySelector("#earn-money");
    earn_money.addEventListener("click", () => {
       
       
     para_buy.textContent = "Work to earn money";
      
        person.money += 100; // Add 100 to the person's money on every click
        console.log(person.money); 
        updateJSONString();
    });
});