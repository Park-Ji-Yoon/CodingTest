const GAME_TIME = 10; // 게임 제한 시간

let score = 0; // 점수
let time = GAME_TIME;
let isPlaying = false; // 게임중인지 판별
let timeInterval;  // setInterval
let checkInterval; // setInterval
let words = []; // 단어 저장 배열

const wordInput = document.querySelector(".word-input"); 
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

init();

function init(){
  getWords();
  wordInput.addEventListener("input", checkMatch);
}

// 게임 시작 버튼 클릭 시 실행
function run(){
  if(isPlaying)
    return; // 게임중이면 return
  isPlaying = true; // 게임중 표시
  timeInterval = setInterval(countDown, 1000); // 1초마다 countDown실행
  checkInterval = setInterval(checkStatus, 50); // 50msc마다 checkStatus실행
  buttonChange("게임이 진행중입니다.."); // 버튼 텍스트 바꿈
}

// 현재 게임 진행 상태 확인 함수
function checkStatus(){
  if(isPlaying && time === "0"){ // 게임 진행중이고 time이 0이면
    buttonChange("게임시작"); // 버튼 텍스트 바꿈
    clearInterval(checkInterval); // checkInterval 클리어함
  }
}

// 단어 일치 체크
function checkMatch(){
  // 퀴즈 단어와 입력받은 단어를 소문자로 변환해서 비교
  if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
    wordInput.value = ""; // input 비움
    if(!isPlaying)
      return; // 게임중이 아니면 return해서 함수 종료
    score++; // 점수 1 증가
    scoreDisplay.innerText = score; // 화면에 score반영
    time = GAME_TIME; // 줄어든 시간을 원래대로 되돌림
    wordInput.focus(); // input에 focus둠
    const randomIndex = Math.floor(Math.random() * words.length); // random인덱스 구함
    wordDisplay.innerText = words[randomIndex]; // 퀴즈 문자를 설정
  }
}

// 단어를 가져오는 함수
function getWords(){
  // api 사용
  axios.get('https://random-word-api.herokuapp.com/word?number=100')
    .then(function(response){ // success
      words = response.data.filter((r) => r.length <= 16); // 길이가 16 이하인 단어만
    })
    .catch(function(error){ // error
      console.log(error);
    })
}

// 초 재는 함수
function countDown(){
  time > 0 ? time-- : isPalying = false; // time이 1 이상이면 -1을 해주고, 0이하이면 게임을 멈춤
  if(isPlaying === false)
    clearInterval(timeInterval); // 게임중이 아니면 timeInterval을 clear
  timeDisplay.innerText = time;  // 시간을 화면에 업데이트
}

// 버튼 
function buttonChange(text){
  button.innerText = text; // 입력받은 text로 버튼 text 변경
  if(text === "게임시작"){ 
    button.classList.remove("loading"); // loading클래스 삭제
  }else if(text === "게임이 진행중입니다.."){
    button.classList.add("loading");    // loading클래스 추가
  }
}