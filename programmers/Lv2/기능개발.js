function solution(progresses, speeds) {
    var answer = [];
    let plus = 0;
    while(progresses[0]){
        for(let j=0; j<progresses.length; j++){
            progresses[j] += speeds[j];
        }
        for(let k=0; k<progresses.length; k++){
            if(progresses[k] >= 100){
                plus += 1;
            }else{
                break;
            }
        }
        for(let i=0; i<plus; i++){
            progresses.shift();
            speeds.shift();
        }
        if(plus != 0){
            answer.push(plus);   
        }
        plus = 0;
    }
    return answer;
}
