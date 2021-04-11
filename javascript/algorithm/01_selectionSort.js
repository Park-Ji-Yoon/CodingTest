let arr = [5, 4, 9, 8, 3, 2, 6, 7, 1, 10];
let idx = -1;
let temp = 0;
for(let i=0; i<arr.length; i++){
  min = 99;
  for(let j=i; j<arr.length; j++){
    if(min > arr[j]){
      min = arr[j];
      idx = j;
    }
  }
  temp = arr[idx];
  arr[idx] = arr[i];
  arr[i] = temp;
}
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}