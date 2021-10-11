const canvas = document.getElementById("canvas");

if(canvas.getContext) {
    var ctx =  canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(50, 30, 20, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillRect(48, 50, 4, 80);

    ctx.beginPath();
    ctx.moveTo(48, 65);
    ctx.lineTo(18, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(52, 65);
    ctx.lineTo(82, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(48, 129);
    ctx.lineTo(18, 150);    
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(52, 129);
    ctx.lineTo(82, 150);    
    ctx.stroke();
}