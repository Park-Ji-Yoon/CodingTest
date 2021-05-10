const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

// todo삭제 시 동작
function deleteToDo(event){
  const btn = event.target; // 클릭된 버튼
  const li = event.target.parentNode; // 클릭된 버튼의 부모 노드
  toDoList.removeChild(li); // 해당 li지움
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id); 
  });
  toDos = cleanToDos; // 지워진 배열을 toDos에 초기화
  saveToDos();
}

// localStorage에 todo들을 저장하는 함수
function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 객체형태로 변환해서 저장
}

// todo를 출력해주는 함수
function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; // todo에 아이디를 부여하기 위해
  delBtn.innerText = "❌"; // delBtn의 텍스트 설정
  // delBtn.style.opacity = 0.5;
  delBtn.style.border = "none";
  delBtn.style.textDecoration = "none";
  delBtn.style.background.opacity = 0;
  delBtn.style.marginLeft = "10px";
  delBtn.addEventListener("click", deleteToDo); // delBtn의 이벤트 설정
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj); // toDos배열에 toDoObj를 push
  saveToDos(); 
}

// submit발생 시 동작하는 함수
function handleSubmit(event){
  event.preventDefault(); // 이벤트 기본 동작 안하게
  const currentValue = toDoInput.value; // currentValue에 입력받은 값 넣음
  paintToDo(currentValue); // 입력받은 값 출력
  toDoInput.value = ""; // 비워줌
}

// ToDo들을 로딩하는 함수
function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS); // localStorage에서 값 가져옴
  if(loadedToDos !== null){ // 있다면
    const parsedToDos = JSON.parse(loadedToDos); // string형으로 변환
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text); // 하나씩 꺼내서 출력하게 함
    });
  }
}

function init(){
  loadToDos(); // loadToDos함수 호출
  toDoForm.addEventListener("submit", handleSubmit); // submit 이벤트 처리
}

init(); // init함수 호출