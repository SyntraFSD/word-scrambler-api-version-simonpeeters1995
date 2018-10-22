console.log('ready to go!!');

//select textarea
let textarea = document.querySelector('textarea');

//select button
let button = document.querySelector('#submit');

/*     button.addEventListener("click", function(){
    let words = textarea.value;
    words.innerHTML.split(' ');
    console.log(words);
    words.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById('card').innerHTML = words;
}); */
function clicker(){
    let words = textarea.value;
    words.split(' ');
    //words.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById('card').innerHTML = words;
    console.log(words);
}
button.addEventListener('click', clicker);
