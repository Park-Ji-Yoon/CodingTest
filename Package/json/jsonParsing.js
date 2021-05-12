// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana', 'strawberry']);
console.log(json);

const rabbit = {
  name: 'tori', 
  color: 'black', 
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump high !`);
  },
};

// jump함수는 포함되지 않음 (Symbol..등)
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
});
console.log(obj);
rabbit.jump();
//obj.jump(); // error

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // error