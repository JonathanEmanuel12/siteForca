

const canvas = document.getElementById("canvas");
var ctx;
var qtdVitorias;

const controle = {
    palavrasArmazenadas: [],
    pontuacao: 0,
    erros: 0,
    atualizarPalavrasArmazenadas: (palavras) => {
        controle.palavrasArmazenadas = Object.values(palavras);
    }
    
};

document.getElementById("btnNovaPalavra").addEventListener("click", novaPalavra);
document.getElementById("btnChute").addEventListener("click", verificarChuteLetra);
document.getElementById("textChute").addEventListener("keyup", (e) => {
    if(isNaN(e.target.value) == false) {
        e.target.value = ""
    }
})

requerirPalavra();
criarForca();


function requerirPalavra() {
    const dificuldade = document.getElementById("valueDif");

    let xhr = new XMLHttpRequest();



    xhr.open('GET', '/centro/palavra/' + dificuldade.value);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                console.log(xhr.responseText);
                controle.atualizarPalavrasArmazenadas(JSON.parse(xhr.responseText));
                prepararJogo(controle.palavrasArmazenadas.pop());
            }
        }
    };

    xhr.send();
}


function prepararJogo(resposta) {
    document.getElementById("valuePalavra").value = resposta.palavra;
    const quadroPalavra = document.getElementById("quadroPalavra");
    const valuePalavra = quadroPalavra.children[0];
    quadroPalavra.innerHTML = "";
    quadroPalavra.appendChild(valuePalavra); 

    for (let i = 0; i < resposta.palavra.length; i++) {
        let letraPalavra = document.createElement("div");
        letraPalavra.className = "letra_da_palavra";
        console.log(letraPalavra.classList);
        quadroPalavra.appendChild(letraPalavra);
    }
}

function novaPalavra() {
    try {
        prepararJogo(controle.palavrasArmazenadas.pop());
    }
    catch {
        if(controle.pontuacao == 3) {
            let valueDif =  document.getElementById("valueDif");
            valueDif.value = parseInt(valueDif.value) + 1;
        }

        requerirPalavra();
    }
}

function verificarChuteLetra() {
    const textChute = document.getElementById("textChute");
    const valuePalavra = document.getElementById("valuePalavra");

    if(valuePalavra.value.toLowerCase().includes(textChute.value.toLowerCase())) {
        
        for (let i = 0; i < valuePalavra.value.length; i++) {
            if(valuePalavra.value[i].toLowerCase() == textChute.value.toLowerCase()) {
                if(i == 0) 
                {
                    document.getElementById("quadroPalavra").children[i+1].innerHTML = textChute.value.toUpperCase();
                }
                else
                {
                    document.getElementById("quadroPalavra").children[i+1].innerHTML = textChute.value;
                }
                
            }
        }
    }
    else {
        controle.erros = controle.erros + 1;
        let divChutesErrados = document.getElementById("chutesErrados");
        let divItemChutesErrados = document.createElement("div");
        divItemChutesErrados.innerHTML = textChute.value;
        divChutesErrados.appendChild(divItemChutesErrados);

        desenhar(controle.erros);
    }
    textChute.value = "";
    let nDivVazias = Array.from(document.getElementById("quadroPalavra").children).filter(verificarDivVazia).length - 1;
    
    if(nDivVazias == 0) {
        controle.pontuacao = controle.pontuacao + 1;
        novaPalavra();
    }

}

function verificarDivVazia(value) {
    return value.innerHTML == "";
}

function desenhar(nErros) {
    switch(nErros) {
        case 1:
            criarCabeca();
            break;
        case 2:
            criarCorpo();
            break;
        case 3:
            criarBracoEsq();
            break;
        case 4:
            criarBracoDir();
            break;
        case 5:
            criarPernaEsq();
            break;
        case 6:
            criarPernaDir();
            controle.pontuacao = 0;
            alert("Opa! Você perdeu");
            controle.erros = 0;
            criarForca();
            document.getElementById("chutesErrados").innerHTML = "";
            requerirPalavra();
            break;
    }
}





function criarForca() {

    try {
        ctx = canvas.getContext('2d');   
    }
    catch(error) {
        alert("Ocorreu um erro com o canvas");
        console.log(error.message);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

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