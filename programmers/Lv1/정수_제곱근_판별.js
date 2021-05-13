function solution(n) {
    var answer = -1;
    let i = 1;
    while(true){
        if(i**2 === n){
            answer = (i+1)**2;
            break;
        }
        if(i**2 > 50000000000000){
            break;
        }
        i += 1;
    }
    return answer;
}
