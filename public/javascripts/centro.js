

const canvas = document.getElementById("canvas");
var ctx;

try {
    ctx =  canvas.getContext('2d');   
}
catch(error) {
    alert("Ocorreu um erro com o canvas");
    console.log(error.message)
}

criarForca();
criarCabeca();
criarCorpo();
criarBracoEsq();
criarBracoDir();
criarPernaEsq();
criarPernaDir();

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