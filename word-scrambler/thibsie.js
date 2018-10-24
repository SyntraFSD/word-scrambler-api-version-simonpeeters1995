    //select text area
let textarea = document.querySelector("textarea");
//select btn
let btn = document.querySelector("#submit");


function clicker(){
    let blablabla = textarea.value;
    blablabla = blablabla.split(' ');
    console.log(blablabla);
}

btn.addEventListener('click',clicker);
