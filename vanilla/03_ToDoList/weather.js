const weather = document.querySelector(".js-weather");

const API_KEY = "0b5366ee95a659251c2a2fb62a321f99";
const COORDS = 'coords';

// 날씨 api와 연동해서 현재 위도/경도에 해당하는 온도 가져옴
function getWeather(lat, lug){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lug}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`
  });
}

// localStorage에 위도, 경도 정보 저장
function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위도, 경도를 실질적으로 얻는 함수
function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }; // 객체에 위도, 경도 초기화
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

// 에러 시 호출되는 함수
function handleGeoError(position){
  console.log("Can't access geo loaction");
}

// 현재 위치 정보를 가져옴
function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// localStorage의 위도 경도(위치 정보)를 가져오는 함수
function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){ // 없다면
    askForCoords();
  }else{ // 있다면
    const parseCoords = JSON.parse(loadedCoords); // string형으로 변환
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init(); // init함수 호출