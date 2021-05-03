function solution(brown, yellow) {
    let answer = [0, 0]; // 가로, 세로 길이를 배열 형태로 return해줄 answer배열 초기화
    let divisorArr = []; // 약수를 넣을 divisorArr 초기화
    
    // 약수를 구함
    for(let i=1; i*i<=yellow; i++){
        if(!(yellow % i)){ // yellow / i의 나머지가 0이면
            divisorArr.push({width: yellow/i, height: i}); // 객체 형태로 가로, 세로 길이 저장
        }
    }
    
    // 약수의 배열을 반복문을 통해 순회함 (forEach)
    divisorArr.forEach(function(divisor, idx){
        // (가로 + 2) * (세로 + 2)가 yellow카펫과 brown카펫을 합한 값과 같다면
        if(((divisor.width + 2) * (divisor.height + 2)) === brown + yellow){ 
            answer[0] += divisor.width + 2;  // answer[0]에 가로 길이를 더해줌
            answer[1] += divisor.height + 2; // answer[1]에 세로 길이를 더해줌
            return; // forEach를 빠져나가기 위해 return문 사용
        } 
    });
    return answer; // answer를 return
}
