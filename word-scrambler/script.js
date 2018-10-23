console.log('ready to go!!');

//select textarea
let textarea = document.querySelector('textarea');
//select btn
let btn = document.querySelector('#submit');

btn.addEventListener('click',clicker);

function clicker(){
    let textContent = textarea.textValue;
    console.log(textContent.split(' '));
}