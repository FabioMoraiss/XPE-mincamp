//criar referencia aos elementos da pagina
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//console.log(frm)

//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // nao envia o forumalrio

    //console.log("ola porra");

    const nome= frm.innome.value;
    const nota1 = Number(frm.innota1.value);
    const nota2 = Number(frm.innota2.value);

    const media = (nota1 + nota2) / 2;

    //console.log(media);

    //mostrar a media
    resp1.innerText = `media das ntoas é ${media.toFixed(2)}`

    //crir condicoes
    if(media >= 7) {
        resp2.innerText= `parabens ${nome}, vc passou de ano`;
        resp2.style.color ="blue";
    }
    else if(media >= 4){
        resp2.innerText = `cuidado ${nome}, vc esta de recupercao`
        resp2.style.color ="aqua"
    }
    else {
        resp2.innerText = `vc é um fudido ${nome}, vc reprovou de ano`;
        resp2.style.color = "red"
    }
})

