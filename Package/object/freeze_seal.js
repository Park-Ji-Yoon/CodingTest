// freeze(동결) : 객체의 값을 바꾸지 못하도록 고정
const jiyoon = {
  address: 'Ulsan',
  age: 19,
  school: 'Mirim Meister High School'
};

console.log("Before : " + JSON.stringify(jiyoon));

Object.freeze(jiyoon);
jiyoon.age = 20;

console.log("After : " + JSON.stringify(jiyoon));
console.log("--------------------------------------------------------------");

// seal(봉인) : 객체에 새로운 속성 추가X, 속성 재설정X, 쓰기 가능한 속성은 변경 가능
const child = {
  address: "어린이집",
  age: 5,
  name: '어린이'
}

console.log("Before : " + JSON.stringify(child));

Object.seal(child);
child.age = 7;

console.log("After : " + JSON.stringify(child));