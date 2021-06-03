function solution(array, commands) {
    let answer = [];
    for(let comm of commands){
        let arr = array.slice(comm[0]-1, comm[1]).sort((a, b) => a - b);
        answer.push(arr[comm[2]-1]);
    }
    return answer;
}
