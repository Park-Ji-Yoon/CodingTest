const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing"; // form이 block로 보이게 하는 클래스명

// 이름을 입력받아 localStorage에 저장하는 함수
function saveName(text){
  localStorage.setItem(USER_LS, text);
}

// submit 이벤트 발생시 수행되는 함수
function handleSubmit(event){
  event.preventDefault(); // 자동 수행 동작 안하게
  const currentValue = input.value; // currentValue에 입력받은 이름 담음
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 이름을 묻는 함수
function askForName(){
  form.classList.add(SHOWING_CN); // form에 showing클래스 추가
  form.addEventListener("submit", handleSubmit); // submit이벤트 처리
}

// 인사말 출력하는 함수
function paintGreeting(text){
  form.classList.remove(SHOWING_CN); // form에서 showing클래스 삭제
  greeting.classList.add(SHOWING_CN); // greeting에 showing클래스 추가 (block로 보이게)
  greeting.innerHTML = `Hello ${text}`;
}

// 이름 로딩하는 함수
function loadName(){
  const currentuser = localStorage.getItem(USER_LS); // USER_LS키를 가지는 값이 localStorage에 있는지 확인하는 변수
  if(currentuser === null){ // user not available (없다면)
    askForName(); 
  }else{ // user available (있다면)
    paintGreeting(currentuser);
  }
}

function init(){
  loadName(); // loadName()함수 호출
}

init(); // init()함수 호출