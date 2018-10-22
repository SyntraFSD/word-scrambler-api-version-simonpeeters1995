console.log('ready to go!!');

let button= document.querySelector(".button");

button.addEventListener("click",sum())

function sum() {

let number1 = document.querySelector(".input1").value;
let number2 = document.querySelector(".input2").value;

let valueSum = parseInt(number1)+parseInt(number2);
document.getElementById("result").innerHTML=valueSum;
}