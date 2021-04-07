const name = "hi";
const age = 80;
const superman01 = {
  name, // name: name
  age,  // age: age
  gender: 'male',
}
console.log(superman01.name);
console.log(superman01.age);
console.log(superman01.gender);

console.log(superman01.birthDay);
console.log('birthDay' in superman01);
console.log('age' in superman01);


const superman02 = {
  name : 'clark',
  age: 30,
}
console.log(superman02.name);
console.log(superman02['age']);
superman02.hairColor = 'black';
superman02['hobby'] = 'football';
console.log(superman02);
delete superman02.age;
console.log(superman02);

makeObject = (name, age) => (
  {
    name,
    age,
    hobby : 'bootball',
  }
)
const Jiyoon = makeObject('jiyoon', 19);
console.log(Jiyoon);
console.log('age' in Jiyoon);
console.log('birthday' in Jiyoon);

isAdult = user => {
  if(!('age' in user) || user.age < 20){
    return false;
  }else{
    return true;
  }
}

const person01 = {
  name: 'Mike',
  age: 47,
}
const person02 = {
  name: 'Jan',
}
console.log(isAdult(person01));
console.log(isAdult(person02));

for (p in person01){
  console.log(person01[p]);
}