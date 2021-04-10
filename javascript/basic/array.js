let days = ["mon", "tue", "wed"];
days.unshift("sun");
days.push("thu");
console.log(days.length);
console.log(days);

for(let i=0; i<days.length; i++){
  console.log(days[i]);
}

for(let day of days){
  console.log(day);
}

days.forEach((index, item) => {
  console.log(index , item);
});
