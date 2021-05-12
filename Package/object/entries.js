// entries : 객체를 [key, value]형식으로 이차원 배열로 만든 후 return 
const obj1 = {
  a: 'something',
  b: 42
};

for(const [key, value] of Object.entries(obj1)){
  console.log(`${key}, ${value}`);
}

const arr1 = Object.entries(obj1);
for(let item of arr1){
  for(let i of item){
    console.log(i);
  }
}