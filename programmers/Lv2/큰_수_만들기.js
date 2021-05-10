function solution(number, k){
    let stackArr = []; // stack 배열 초기화
    let imsiK = k; // 나중에 사용할 임시 k 저장해둠
    
    // number의 길이만큼 반복문을 수행
    for(let i=0; i<number.length; i++){
        let num = number[i]; // num에 number[i]의 값을 넣어준다

        // k의 값이 0이 넘고, stackArr에 가장 마지막으로 넣은 값이 num보다 작다면
        while(1 <= k && stackArr[stackArr.length-1] < num){ 
            stackArr.pop(); // stackArr에 가장 마지막으로 넣은 값을 pop을 통해 빼준다
            k--; // k의 값을 1 감소시킨다
        }
        stackArr.push(num); // num을 push한다
    }
    
    // 0부터 number.length - 처음 받은 k의 값 만큼 stackArr에서 자른 후 join('')을 통해 문자열로 만들어주고 return한다
    return stackArr.slice(0, number.length - imsiK).join('');
}
