const ques = prompt("what program would you like to run(length, yell, binary or numSum");
console.log(ques);
let uppercase=""
if (ques === "length") {
const word=prompt("Enter your word to calculate the number of characters:")
    
    let length= 0
    for (let char of word){
        length++;
        console.log(length);
    }
 alert("number of characterrs in word:" + length);
    
    
}
if (ques == "yell") {
    const word = prompt("Enter the word ");
    let upperword = word.toUpperCase();
    alert(upperword);
}
if (ques == "binary")
{
    let newstring = "";
    const word = prompt("Enter your word")
    for (let i = 0; i <word.length;i++) {
        if (word[i] === "0" || word[i] === "1") {
            newstring += word[i];
        }
      }
 alert(newstring)   
}

if (ques === "numSum")
{
    number = prompt("Enter number to calculate the sum of all the numbers it contains:")
    number = parseInt(number);
    console.log(number)
let sum=0
    for (let num = 1; num <= number; num++){
        sum += num;
        console.log(sum);
    }
    
    alert(sum);    
}