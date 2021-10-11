const divDificuldade = document.getElementById("quadroDificuldade");
const textDificuldade = document.getElementById("textDificuldade");
const btnIniciante = document.getElementById("btnIniciante");
const btnIntermediario = document.getElementById("btnIntermediario");
const divInicio = document.getElementById("quadroInicio");
const container = document.getElementById("container");

const textNome = document.getElementById("textNome");
const btnComecar = document.getElementById("btnComecar");

btnComecar.addEventListener("click", habilitarDiv);
divInicio.style.display = "none";
habilitarDiv();

console.log(divInicio.style.display == "none");

function habilitarDiv() {
    if(divInicio.style.display == "none"){
        divInicio.style.display = "flex";
        divDificuldade.style.display = "none";
    }
    else {
        console.log("Foi");
        divDificuldade.style.display = "flex";
        divInicio.style.display = "none";
    }
    
}
