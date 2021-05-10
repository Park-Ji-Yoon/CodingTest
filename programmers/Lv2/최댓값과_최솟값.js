function solution(s) {
    var answer = '';
    let arr  = s.split(' ').map(Number);
    answer += Math.min(...arr) + " ";
    answer += Math.max(...arr);
    return answer;
}
