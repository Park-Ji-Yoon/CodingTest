function solution(N, stages) {
    let answer = [];
    let person = stages.length;
    let fail = new Array(N).fill(0);
    for(let i=0; i<N; i++){
        let level = stages.filter(element => (i+1) === element).length;
        if(person <= 0){
            break;
        }
        fail[i] += level/person;
        person -= level;
    }
    for(let i=0; i<fail.length; i++){
        answer.push(fail.indexOf(Math.max.apply(null, fail))+1);
        fail[fail.indexOf(Math.max.apply(null, fail))] = -1;
    }
    return answer;
}
