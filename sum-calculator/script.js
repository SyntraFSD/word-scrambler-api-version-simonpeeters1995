console.log('ready to go!!');

let knop = document.querySelector(".button-is-info")


function calculate () {
    let snumber_01 = document.querySelector ("#number-01").value;
    let snumber_02 = document.querySelector ("#number-02").value;
    let isom = parseInt(snumber_01) + parseInt(snumber_02);
    let iverschil = parseInt(snumber_01) - parseInt(snumber_02);
    let iproduct = parseInt(snumber_01) * parseInt(snumber_02);
    let ideling = parseInt(snumber_01) / parseInt(snumber_02);
    let fomzetting = parseFloat(ideling);
    let iresultaat = Math.round(fomzetting*100)/100;
    document.getElementById("result1").innerHTML = isom;
    document.getElementById("result2").innerHTML = iverschil;
    document.getElementById("result3").innerHTML = iproduct;
    document.getElementById("result4").innerHTML = iresultaat;
}

knop.addEventListener('click', calculate);


