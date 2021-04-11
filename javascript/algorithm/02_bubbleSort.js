let arr = [5, 4, 9, 8, 3, 2, 6, 7, 1, 10];
let temp = 0;
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length - (i+1); j++){
    if(arr[j+1] < arr[j]){
      temp = arr[j+1];
      arr[j+1] = arr[j];
      arr[j] = temp;
    }
  }
}
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}