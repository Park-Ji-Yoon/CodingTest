function solution(nums) {
    var answer = 0;
    let arr = new Array(nums.length+1).fill(0);
    for(let i=0; i<nums.length; i++){
        arr[nums[i]] += 1;
    }
    console.log(arr);
    let num = arr.filter((a) => a != 0).length;
    if((nums.length/2) > num){
        answer = num;
    }else{
        answer = nums.length / 2;
    }
    return answer;
}
