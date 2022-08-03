const canvas= document.querySelector("canvas");
const ctx=canvas.getContext("2d");
canvas.width=800;
canvas.height=800;

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath(); //다시 시작
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle="red";
// ctx.fill();

ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke();
