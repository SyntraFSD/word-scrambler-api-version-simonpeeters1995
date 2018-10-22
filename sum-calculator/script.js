console.log('ready to go!!');
let number1 = document.querySelector('#number-01');
let number2 = document.querySelector('#number-02');
let button = document.querySelector('.is-info');

function clicker(){
    let sum = parseInt(number1.value) + parseInt(number2.value);
    let minus = parseInt(number1.value) - parseInt(number2.value);
    let multiply = parseInt(number1.value) * parseInt(number2.value);
    let divide = parseInt(number1.value) / parseInt(number2.value);
    let result = parseFloat(divide);
    document.getElementById('result').innerHTML = sum;
    document.getElementById('result2').innerHTML = minus;
    document.getElementById('result3').innerHTML = multiply;
    document.getElementById('result4').innerHTML = result;
}
button.addEventListener('click', clicker);
