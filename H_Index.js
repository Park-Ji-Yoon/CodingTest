function solution(citations) {
    var answer = 0;
    let i = 0;
    while(true){
        answer = i;
        let cnt = citations.filter((e) => e >= answer).length;
        if(cnt < answer){
            break;
        }
        i++;
    }
    return answer-1;
}
