

const canvas = document.getElementById("canvas");
var ctx;
var qtdVitorias;

try {
    ctx =  canvas.getContext('2d');   
}
catch(error) {
    alert("Ocorreu um erro com o canvas");
    console.log(error.message);
}

document.getElementById("btnNovaPalavra").addEventListener("click", novaPalavra);

requerirPalavra();
criarForca();
criarCabeca();
criarCorpo();
criarBracoEsq();
criarBracoDir();
criarPernaEsq();
criarPernaDir();

function requerirPalavra() {
    const dificuldade = document.getElementById("valueDif");

    let xhr = new XMLHttpRequest();



    xhr.open('GET', '/centro/palavra/' + dificuldade.value);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                console.log(xhr.responseText);
                document.getElementById("valuePalavra").value = JSON.parse(xhr.responseText).palavra;
                prepararJogo(JSON.parse(xhr.responseText));
            }
        }
    };

    xhr.send();
}

function prepararJogo(resposta) {
    const quadroPalavra = document.getElementById("quadroPalavra");
    const valuePalavra = quadroPalavra.children[0];
    quadroPalavra.innerHTML = "";
    quadroPalavra.appendChild(valuePalavra); 

    for (let i = 0; i < resposta.palavra.length; i++) {
        let letraPalavra = document.createElement("div");
        letraPalavra.className = "letra_da_palavra";
        console.log(letraPalavra.classList);
        letraPalavra.innerHTML = resposta.palavra[i];
        quadroPalavra.appendChild(letraPalavra);
    }
}

function novaPalavra() {
    let valueDif = document.getElementById("valueDif");

    valueDif.value = (parseInt(valueDif.value) < 3) ? parseInt(valueDif.value)+1 : parseInt(valueDif.value);
    requerirPalavra();
}














function criarForca() {
    ctx.fillRect(40, 23, 4, 95);
    ctx.fillRect(40, 23, 60, 4);
    ctx.fillRect(98, 23, 4, 15);
}

function criarCabeca() {
    ctx.beginPath();
    ctx.arc(100, 48, 10, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    ctx.stroke();
}
function criarCorpo() {
    ctx.fillRect(99, 58, 2, 35);
}
function criarBracoEsq() {
    ctx.beginPath();
    ctx.moveTo(99, 68);
    ctx.lineTo(82, 83);
    ctx.stroke();
}
function criarBracoDir() {
    ctx.beginPath();
    ctx.moveTo(101, 68);
    ctx.lineTo(118, 83);
    ctx.stroke();
}
function criarPernaEsq() {
    ctx.beginPath();
    ctx.moveTo(100, 93);
    ctx.lineTo(83, 111);    
    ctx.stroke();
}
function criarPernaDir() {
    ctx.beginPath();
    ctx.moveTo(100, 93);
    ctx.lineTo(117, 111);    
    ctx.stroke();
}