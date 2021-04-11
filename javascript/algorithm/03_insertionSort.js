let arr = [5, 4, 9, 8, 3, 2, 6, 7, 1, 10];
let temp = 0;
for(let i=0; i<arr.length; i++){
  j = i;
  while(arr[j+1] < arr[j]){
    temp = arr[j+1];
    arr[j+1] = arr[j];
    arr[j] = temp;
    j--;
  }
}
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}