function solution(s){
    let arr = [...s];
    let left = '(';
    let left_cnt = 0;
    if(arr[0] === ")" || arr[arr.length-1] === "("){
        return false;
    }
    arr.forEach(function(element, idx){
        if(element === left) left_cnt++;
        else if(left_cnt != 0) left_cnt--;
    });
    return (left_cnt === 0 ? true : false);
}
