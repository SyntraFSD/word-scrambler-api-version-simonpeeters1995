console.log('ready to go!!');
//select textarea

let textarea = document.querySelector('#textarea');

//select btn

let btn = document.querySelector('#submit');

function clicker(){
    let textinhoud = textarea.innerText;
    let charArray = textinhoud.split("");
  

console.log(textinhoud);
}
btn.addEventListener('click',clicker);