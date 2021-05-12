// 메소드는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사 (중복 삭제)
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget);