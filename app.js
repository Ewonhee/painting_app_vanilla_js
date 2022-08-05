const canvas= document.querySelector("canvas");
const ctx=canvas.getContext("2d");
canvas.width=800;
canvas.height=800;
ctx.lineWidth = 2;

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

// ctx.fillRect(210-38, 200-38, 15, 100);
// ctx.fillRect(350-38, 200-38, 15, 100);
// ctx.fillRect(260-38, 200-38, 60, 200);

// ctx.arc(250, 100, 50, 0, 2*Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle="white";
// ctx.arc(260+10, 80+10, 8, Math.PI, 2*Math.PI);
// ctx.arc(220+10, 80+10, 8, Math.PI, 2*Math.PI);

// ctx.fill();
// ctx.lineWidth=5; 

// const colors =[

//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
//   "#18dcff",
//   "#7d5fff",
// ]; //색 배열

// let x_point=0;
// let y_point=0;

// function onMove(event){
//   ctx.beginPath(); 
//   ctx.moveTo(x_point,y_point);
//   const color=colors[Math.floor(Math.random()*colors.length)]; //색 변환
//   ctx.strokeStyle=color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke(); 
// }

// function onclick2(event){
//   x_point=event.offsetX;
//   y_point=event.offsetY;
//   ctx.beginPath();
//   console.log("point");
// }

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("click",onclick2);

let isPainting=false;


function onMove(event){
  if(isPainting){
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX,event.offsetY);
}

function startPainting(){
  isPainting=true;
}

function cancelPainting(){
  isPainting=false;
}


//canvas.addEventListener("mousemove", onClick);
canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
