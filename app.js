const canvas= document.querySelector("canvas");
const ctx=canvas.getContext("2d");
const CANVAS_WIDTH =800;
const CANVAS_HEIGHT=800;

canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;

const lineWidth = document.getElementById("line-width");
const color=document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
); //Htmlcollection으로 주기 때문에 배열로 바꿔야한다. 
const modeBtn=document.getElementById("mode-btn");
const destroyBtn= document.getElementById("destroy-btn");
const eraserBtn=document.getElementById("eraser-btn");

ctx.lineWidth = lineWidth.value;
let isPainting=false;
let isFilling=false;


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
  ctx.beginPath(); //새로 해줘야 굵기 업데이트 됨
}

function onLineWidthChange(event){
  console.log(event.target.value);
  ctx.lineWidth=event.target.value;
}

function onColorChange(event){
  ctx.strokeStyle=event.target.value;
  ctx.fillStyle=event.target.value;
}

function onColorClick(event){
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle=colorValue;
  ctx.fillStyle=colorValue;
  color.value=colorValue;
}

function onModeClick(){
  if(isFilling){
    isFilling=false;
    modeBtn.innerText="Fill";
  }
  //if(조건문)-->ture 해야 조건성립 하지만 앞에서 false로 기본값 지정
  else{
    isFilling=true;
    modeBtn.innerText="Draw";
  }
}

function onCanvasClick(){
  if(isFilling){
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

// function onColorClick(event){
//   console.dir(event.target.dataset.color);
// }
//콜솔로그로 컬러 연결확인하기

function onDestroyClick(){
  ctx.fillStyle="white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick(){
  ctx.strokeStyle="white";
  isFilling=false;
  modeBtn.innerText="Fill"
  //드로우와 같은 개념으로 지우기도 하얀색으로 칠하는것 이기때문에 설정을한다.
}


//canvas.addEventListener("mousemove", onClick);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));//각 color 마다 이벤트리스너 추가
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click",onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);