function solution(numbers, target) {
    let answer = 0; // return할 값 answer를 0으로 초기화
    let sum = 0;    // 깊이 탐색을 호출할 때마다 배열의 합을 구할 sum변수 초기화

    // 깊이 탐색 함수
    function dep(numbers, target, num){
        // console.log(numbers, num); // 확인용 출력
        if (num === numbers.length) { // num이 numbers.length와 같으면
            // console.log("확인");
            sum = numbers.reduce((cur, ac) => cur + ac); // reduce함수로 numbers의 합을 구함
            if (sum === target) { // numbers의 합과 target이 같으면
                // console.log("success"); // 확인용 출력
                return answer++; // answer에 1을 더해줌
            }
        } else { // num이 numbers.length와 같으면
            dep(numbers, target, num + 1); // dep함수 호출

            numbers[num] *= -1; // num인덱스에 해당하는 numbers의 요소에 -1을 곱함
            dep(numbers, target, num + 1); // dep함수 호출
        }
    }
    dep(numbers, target, 0); // 첫 함수 호출
    return answer; // answer를 return
}
