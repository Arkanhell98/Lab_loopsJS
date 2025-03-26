// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")()
for (let i = 0; i < 1; i++) {
    console.log("This is Task Five!");
  };

let num 
num = Number(prompt("Digita la cantidad de números que quieres que se impriman: "))

for (let i = 1; i < (num + 1); i++){
  if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
  } 
  else if(i % 3 === 0){
      console.log("Fizz");
  } 
  else if (i % 5 === 0){
      console.log("Buzz");
  } 
  else if(i % 7 === 0){
      console.log("Woof");
  }
  else {
      console.log(i);
  }
  };