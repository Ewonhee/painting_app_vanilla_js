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

// ctx.moveTo(50,50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50); 
// ctx.stroke();

// ctx.fillRect(200-38, 200-38, 50, 200);
// ctx.fillRect(400-38, 200-38, 50, 200);
// ctx.fillRect(300-38, 300-38, 50, 100);
// ctx.fillRect(200-38, 200-38, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

ctx.fillRect(210-38, 200-38, 15, 100);
ctx.fillRect(350-38, 200-38, 15, 100);
ctx.fillRect(260-38, 200-38, 60, 200);

ctx.arc(250, 100, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(260+10, 80+10, 8, Math.PI, 2*Math.PI);
ctx.arc(220+10, 80+10, 8, Math.PI, 2*Math.PI);

ctx.fill();