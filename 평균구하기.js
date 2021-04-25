function solution(arr) {
    var answer = 0;
    answer = arr.reduce((initalValue, currentValue) => (initalValue + currentValue), 0);
    answer = answer / arr.length;
    return answer;
}
