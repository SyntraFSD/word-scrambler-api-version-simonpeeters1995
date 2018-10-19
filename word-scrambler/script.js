console.log('ready to go!!');

//select textarea
let tekst = document.querySelector("textarea");
//select btn
let button = document.querySelector("#submit");

console.log(tekst.textContent);
//
button.addEventListener("click",function(){

let wordArray = tekst.innerHTML.split(' ');
let textChanged="";

wordArray.sort(function(a,b) {return 0.5-Math.random()});
for(let i =0;i<wordArray.length;i++){
 textChanged += " " + wordArray[i];
 console.log(textChanged);
}

document.getElementById('card').innerHTML=textChanged;

});