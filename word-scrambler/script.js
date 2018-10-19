console.log('ready to go!!');

//select textarea
let tekst = document.querySelector(".textarea");
//select btn
let button = document.querySelector("#submit");

console.log(tekst.textContent);
//
button.addEventListener("click",function(){
let array = tekst.textContent.split(" ");

console.log(array.length); 


let uitkomst = document.querySelector(".card-content");
});