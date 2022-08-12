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
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");
const fontText=document.getElementById("text2");
const fontTypes=document.getElementById("fontTypes");
const fontWeights=document.getElementById("fontWeights");

ctx.lineWidth = lineWidth.value;
//ctx.fontsize= style.fontsize.value;
let isPainting=false;
let isFilling=false;
let lacrimosa;


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
  //ctx.fontsize=event.target.value;
} //라인 굵기

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
  if(window.confirm("The action will be canceled")){
    ctx.fillStyle="white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
  else{
    alert("Stopped.")
  }
}

function onEraserClick(){
  ctx.strokeStyle="white";
  isFilling=false;
  modeBtn.innerText="Fill"
  //드로우와 같은 개념으로 지우기도 하얀색으로 칠하는것 이기때문에 설정을한다.
}

function onFileChange(event){
  const file= event.target.files[0];
  const url = URL.createObjectURL(file)
  const image = new Image(); //<img src=""/>, 
  image.src = url; //<script> 태그의 src 속성은 외부 스크립트 파일의 URL을 명시합니다.
  image.onload =function(){
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value=null;
  }; 
}

function onDoubleClick(event){
  const text = textInput.value;
  const textFont = fontTypes.value;
  const textWeight = fontWeights.value;
  const textSize = lineWidth.value;
  if(text !==""){
    ctx.save(); //기존 설정 저장
    ctx.font = ` ${textWeight} ${textSize}px ${textFont}`;
    ctx.fillText(text, event.offsetX, event.offsetY);
    console.log(textFont);
    ctx.restore();//기존 세이브 복구
  }
}


// function fontstyle(){
//   const text3=fontText.value;
//   ctx.font=text3;
// }

// let f =new FontFace('test','url()');
// f.load().then(function(){

// }); 


function onSaveClick(){
  const url =canvas.toDataURL();
  const a =document.createElement("a");//a 태그 생성(다운로드 사용하기 위해)
  a.href=url;
  a.download="myDrawing.png";
  a.click();
}



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
fileInput.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", onDoubleClick);
saveBtn.addEventListener("click", onSaveClick);
//canvas.addEventListener("change",fontstyle);//함수를 실행 시켜야 콘솔로 들어감
// fontText.addEventListener("change",fontstyle);