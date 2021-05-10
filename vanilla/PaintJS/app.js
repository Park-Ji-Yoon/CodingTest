const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITAL_COLOR = "#2c2c2c"; // 초기 색 (검정색)
const CANVAS_SIZE = document.getElementsByClassName("canvas")[0].offsetWidth; // 캔버스의 가로, 세로 크기

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;   // 캔버스 가로 크기
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight; // 캔버스 세로 크기

ctx.fillStyle = "white"; // 캔버스 배경 초기 색 (흰색)
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // 흰색을 채움

ctx.strokeStyle = INITAL_COLOR; // 선 초기 색 설정
ctx.fillStyle = INITAL_COLOR;   // 선 초기 색 설정
ctx.lineWidth = 2.5;            // 선 굵이 설정

// paint / fill 모드별 표시
let painting = false;
let filling = false;

// 그리기 멈추는 함수
function stopPainting(){
  painting = false;
}

// 그리기 시작하는 함수
function startPainting(){
  painting = true;
}

// 마우스 움직일 때 실행되는 함수
function onMouseMove(event){
  const x = event.offsetX; // x좌표값
  const y = event.offsetY; // y좌표값
  if(!painting){ // painting이 false라면
    ctx.beginPath();  // 선 그리기 시작
    ctx.moveTo(x, y); // (x, y)좌표까지 그림 (처음엔 거의 점)
  }else{
    ctx.lineTo(x, y); // (x, y)좌표까지 그림
    ctx.stroke();     // 선을 이어서 그어줌
  }
}

// 색상 클릭 시 실행되는 함수
function handleColorClick(event){
  const color = event.target.style.backgroundColor; // 클릭된 div의 backgroundColor
  ctx.strokeStyle = color; // 선 색상 설정
  ctx.fillStyle = color;   // 채우기 색상 설정
}

// range 변호 시 실행되는 함수
function handleRangeChange(event){
  const size = event.target.value; // range의 값
  ctx.lineWidth = size; // 굵이를 range의 값으로 설정
}

function handleModeClick(){
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  }else{
    filling = true;
    mode.innerText = "Paint";
  }
}

// 캔버스 클릭 시 실행되는 함수
function handleCanvasClick(){
  if(filling){ // filling이 true라면
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // 캔버스를 설정된 색으로 채움
  }
}

// 우클릭 시 실행되는 함수
function handleCM(event){
  event.preventDefault(); // 기본 동작 막음
}

// Save 버튼 클릭 시 동작하는 함수
function handleSaveClick(){
  const image = canvas.toDataURL("image/jpeg"); // 이미지를 url형식으로 변환
  const link = document.createElement("a"); // a태그 만듬
  link.href = image; // 이미지 링크를 설정
  link.download = "PaintJS[🎨]"; // 파일명 설정
  link.click(); // 클릭 동작 수행해서 download되게 함
}

// 캔버스 관련 이벤트
if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

// 색상 팔레트 이벤트
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

// range 이벤트
if(range){
  range.addEventListener("input", handleRangeChange);
}

// mode 이벤트
if(mode){
  mode.addEventListener("click", handleModeClick);
}

// saveBtn 이벤트
if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick);
}