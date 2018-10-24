//select textarea
console.log('document');

function clicker(){
    textContent = textarea.value;

    textcontent = textContent.split('');

    console.log(textContent);
}

let textarea = document.querySelector('textarea');

//select btn
let btn = document.querySelector('#submit');

btn.addEventListener('click',clicker);

console.log(btn)