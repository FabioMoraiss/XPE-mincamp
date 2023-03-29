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
    var imcFaixa = document.querySelector('#faixa');


    var wight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(wight, height);
    var fomattedImc = imc.toFixed(4).replace('.',',');
    
    console.log(imc)
    imcResult.textContent = fomattedImc;

    if(imc < 16) {

        imcFaixa.textContent = 'valor invalido'

    } else if(imc >= 16 && imc < 16.99999) {

        imcFaixa.textContent = 'MUITO abaixo do peso'

    } else if (imc >= 17 && imc <18.4999999) {

        imcFaixa.textContent = 'abaixo do peso'

    } else if (imc >=18.5 && imc < 24.99999) {

        imcFaixa.textContent = 'peso normal'

    } else if (imc >= 25 && imc < 29.99999) {

        imcFaixa.textContent = 'acima do peso'

    } else if(imc >=30 && imc <34.99999) {

        imcFaixa.textContent = 'obesidade grau 1 '

    } else if (imc >= 35 && imc <=40) {

        imcFaixa.textContent = 'obesidade grau 2'

    } else if ( imc > 40) {
         
        imcFaixa.textContent = 'obesidade grau 3'

    } else {
        imcFaixa.textContent = 'nao se encaixa'
    }

}
start();