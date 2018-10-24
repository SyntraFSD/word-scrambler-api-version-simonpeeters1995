console.log('ready to go!!');

//select textarea
let textarea = document.querySelector(".textarea");

//select button
let btn = document.querySelector("#submit");

//document is root van uw DOM

btn.addEventListener("click",clicker);    
    
function clicker(){
    let Blablabla = textarea.value;

    Blablabla = Blablabla.split(" ");
    console.log(Blablabla);
  
};



