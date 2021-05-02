function solution(n){
    let answer = ''; // return할 문자열 변수 초기화
    let len = 3; // len에 3을 초기화 (124, 3개의 수 사용하기 때문에)
    while (n > 0) { // n이 1 이상일 때만 반복문 수행
        switch (n % len) { // n을 len으로 나눈 나머지에 따라 case문 들어감
            case 0: // n을 len으로 나눈 나머지가 0인 경우
                answer = '4' + answer;
                n = (n / len) - 1;
                break;
            case 1: // n을 len으로 나눈 나머지가 1인 경우
                answer = '1' + answer;
                n = Math.floor(n / len);
                break;
            case 2: // n을 len으로 나눈 나머지가 2인 경우
                answer = '2' + answer;
                n = Math.floor(n / len);
                break;
        }
    }
    return answer;
}
