console.log('ready to go!!');

let textarea = document.querySelector('.textarea');
let btn = document.querySelector('#submit');


btn.addEventListener("click",clicker);

function clicker(){
   let blablabla = textarea.value;

    blablabla = blablabla.split(" ");
    console.log(blablabla);
}   