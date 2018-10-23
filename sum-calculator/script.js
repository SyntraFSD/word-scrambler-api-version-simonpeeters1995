console.log('ready to go!!');

let button = document.querySelector('.is-info');

function clicker(){
    let number1 = parseInt(document.querySelector('#number-01').value);
    let number2 = parseInt(document.querySelector('#number-02').value);
    let sum = number1 + number2;
    let minus = number1 - number2;
    let multiply = number1 * number2;
    let divide = number1 / number2;
    let result = parseFloat(divide);
    document.getElementById('result').innerHTML = sum;
    document.getElementById('result2').innerHTML = minus;
    document.getElementById('result3').innerHTML = multiply;
    document.getElementById('result4').innerHTML = result;
}
button.addEventListener('click', clicker);
