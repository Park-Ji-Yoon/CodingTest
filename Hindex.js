function solution(citations) {
    let answer = 0; // return할 변수 answer 0으로 초기화
    let i = 0; // while 반복문에 사용할 변수 i를 0으로 초기화
    
    // 무한반복 진행
    while(true){
        answer = i; // answer에 i값을 넣어줌
        let cnt = citations.filter((e) => e >= answer).length; // citations배열에서 answer(i) 이상인 값의 개수 구함
        if(cnt < answer){ // 만약 구한 개수가 answer보다 작다면
            break; // 반복문 중단 (break)
        }
        i++; // i에 1을 더함
    }
    return answer-1; // 한 번 더 증감된 상태에서 break되기 때문에 -1을 해줌
}
