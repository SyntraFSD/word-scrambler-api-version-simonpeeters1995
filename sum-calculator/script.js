console.log('ready to go!!');

let button= document.querySelector(".button");

function sum() {

let valueSum = parseInt(document.querySelector(".input1").value)
 + parseInt(document.querySelector(".input2").value);
 
document.getElementById("result").innerHTML=valueSum;

}

button.addEventListener("click",sum);