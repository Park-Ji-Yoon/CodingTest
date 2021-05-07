function solution(x) {
    var answer = true;
    let arr = String(x).split('');
    let num = arr.reduce((a, b) => Number(a) + Number(b));
    if(x % num != 0){
        return false;
    }
    return answer;
}
