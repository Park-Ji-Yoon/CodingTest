// DOM Basic
const title = document.querySelector("#title"); // title id를 가지는 html요소 가져옴
title.innerHTML = "Hello?! From Javascript"; // title의 내용을 바꿈
title.style.color = "black"; // title의 글자 색을 바꿈

document.title = "I own you now"; // html파일의 title을 변경함


// DOM event
// handleResize 함수
function handleResize(event){
  console.log(event);
}
// window에서 resize이벤트가 발생했을 때, handleResize함수 호출
window.addEventListener("resize", handleResize);

const CLICKED_CLASS = "clicked";

// handleClick 함수
function handleClick(event){
  // title에서 CLICKED_CLASS의 존재 여부를 확인 후,
  // 없으면 추가, 있으면 삭제를 해줌
  title.classList.toggle(CLICKED_CLASS);
  
  /*
  // title의 클래스 리스트 중 CLICKED_CLASS 존재 여부
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(!hasClass){ // 없다면
    title.classList.add(CLICKED_CLASS); // title의 클래스 리스트에 CLICKED_CLASs추가
  }else{ // 있다면
    title.classList.remove(CLICKED_CLASS); // title의 클래스 리스트에서 CLICKED_CLASs삭제
  }
  */
}

// init (초기화) 함수
function init(){
  // title에서 click이벤트가 발생했을 때, handleClick함수 호출
  title.addEventListener("click", handleClick);
}
init(); // init 함수 호출