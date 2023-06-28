//pegando elementos do html
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
console.log(fibonatrecursivo(11))


frm.addEventListener("submit", (e) =>{ 
    e.preventDefault(); // nao envia o forumalrio (não limpa os camapos)

    let peso =0;

    console.log("oi porra");

    const nome = frm.nomedomeliante.value;
    const homem = frm.meliantemascolino.checked;
    const altra = Number(frm.alturadomeliante.value);

    peso = homem ?  calculopesoMascolino(altra) : calcularpesoFeminino(altra);

    resp1.innerText = `${nome}: seu peso ideal é ${peso} kg`
    
})

function calculopesoMascolino(altura) {

    let peso = 22 *  Math.pow(altura, 2)
    return peso.toFixed(2);
}

function calcularpesoFeminino(altura) {
    let peso = 21 * Math.pow(altura, 2)
    return peso.toFixed(2);
}

frm.addEventListener("reset", ( )=> {
    resp1.innerText="";
}) 

function fibonatrecursivo(n) {
    if(n <=2) {
        return 1;
    }
    return fibonatrecursivo(n-1) + fibonatrecursivo(n-2);
}
