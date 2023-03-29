function start() {
    var butttonCauculateImc = document.querySelector('#button-calculate-imc')
    butttonCauculateImc.addEventListener('click',haddlebuttonclick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', haddlebuttonclick);
    inputHeight.addEventListener('input', haddlebuttonclick);
    haddlebuttonclick();
}

function calculateImc(wight, height){
    return wight / (height * height);
}

function haddlebuttonclick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var wight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(wight, height);
    var fomattedImc = imc.toFixed(2).replace('.',',');
    
    
    console.log(fomattedImc)
    imcResult.textContent = fomattedImc;

}
start();