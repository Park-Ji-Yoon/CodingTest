// 함수 선언문
function add1(num1, num2){
  return num1 + num2;
}

// 함수 표현식
let add2 = function(num1, num2){
  return num1 + num2;
}

// 화살표 함수
add3 = (num1, num2) => (
  num1 + num2
);
console.log(add3(5, 7));