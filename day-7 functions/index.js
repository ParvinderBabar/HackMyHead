const task = prompt("What task would you like to run ? (sum, convert, low, wordCounter, random, randomRange, capitalize, quit)");

if (task === "sum") {
    // alert("sum");

   
    function add() {
         firstno = +prompt("enter the first number");
        secondno = +prompt("enter the secnnd number");
        let sum = 0
        sum = firstno + secondno;
        alert(sum)
    }
    add();
}
if(task === "random")
{
    function random() {
        
        max = +prompt("enter the max range");
    
        result=Math.floor(Math.random()*max)
        alert(result)
    }
    random();
}
if(task === "randomRange")
{
    function randomRange() {
         min = +prompt("enter the min range");
        max = +prompt("enter the max range");
    
        result=Math.floor(Math.random()*(max-min+1)+min)
        alert(result)
    }
    randomRange();
}

if (task === "capitalize") {
    input = prompt("enter sentence to count words");
    let newSentence = input.charAt(0).toUpperCase();
    for (i = 1; i < input.length; i++){
        
        if (input[i-1] ===" ") {
            newSentence += input[i].toUpperCase()
        
           
        } else {
            newSentence += input[i]
        
       }
    }
    alert(newSentence)
    
}
// if (task === "quit")
// {
//     while (true) {
//         break
//     }
// }