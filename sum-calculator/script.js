console.log('ready to go!!');
let number1 = document.querySelector('#number-01');
let number2 = document.querySelector('#number-02');
let button = document.querySelector('.is-info');

function clicker(){
    let calc = parseInt(number1.value) + parseInt(number2.value);
    document.getElementById('result').innerHTML = calc;
}
button.addEventListener('click', clicker);