function solution(n) {
    // n 번째 피보나치 수
    // 피보나치 수는 0부터 시작됨
    // 0부터 시작하는 피보나치수의 n번째 수를 구해야함
    // 해당 수를 1234567로 나눈 나머지 리턴
    // 자바스크립트가 정수계산을 보장하는 범위는 console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MAX_SAFE_INTEGER)
    let answer = fibonumber(n)%1234567;
    return answer;
}

function fibonumber(v) {
    let bottom_up = [];
    bottom_up[0] = 0;
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for (let i = 3; i <= v; i++) {
        bottom_up[i] = (bottom_up[i-1]%1234567 + bottom_up[i-2]%1234567);
    }
    return bottom_up[v];
}
