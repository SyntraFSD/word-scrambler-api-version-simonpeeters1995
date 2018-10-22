console.log('ready to go!!');

//select textarea
let textarea = document.querySelector('textarea');

 //select button
 let button = document.querySelector('#submit');
     //console.log(textarea.textContent);

/* button.addEventListener("click", function(){
     let words = textarea.value.split(' ');
     console.log(words);
     words.sort(function(a, b){return 0.5 - Math.random()});
     document.getElementById('card').innerHTML = words;
 }); */


function clicker(){
    let words = textarea.value.split(' ');
    document.getElementById('card').innerHTML = words;
    words.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById('card').innerHTML = words;
}
button.addEventListener('click', clicker);
