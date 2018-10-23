console.log('ready to go!!');

let knop = document.querySelector(".button-is-info")
knop.addEventListener('click', calculate);

function calculate () {
    let snumber_01 = document.querySelector ("#number-01").nodeValue;
    let snumber_02 = document.querySelector ("#number-02").nodeValue;
    let isom = parseInt(snumber_01.value) + parseInt(snumber_02.value);
    let iverschil = parseInt(snumber_01.value) - parseInt(snumber_02.value);
    let iproduct = parseInt(snumber_01.value) * parseInt(snumber_02.value);
    let iverschil = parseInt(snumber_01.value) / parseInt(inumber_02.value);
    let fomzetting = parseFloat(verschil);
    let iresultaat = Math.round(verschil*10)/10;
    document.getElementById("#result1").innerHTML = isom;
    document.getElementById("#result2").innerHTML = iverschil;
    document.getElementById("#result3").innerHTML = iproduct;
    document.getElementById("#result4").innerHTML = iresultaat;
}



