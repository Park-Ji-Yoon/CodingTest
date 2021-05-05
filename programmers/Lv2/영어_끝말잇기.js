function solution(n, words) {
    let cntTurn = new Array(n).fill(0); // 참여자의 차례를 기록할 배열
    let usedWords = []; // 사용한 단어 저장할 배열 
    let lastChar = ''; // 단어의 끝말 저장할 변수
    let index = 0; // 끝말잇기가 종료된 후 지역변수 i를 전달해줄 index변수
    let flag = false; // 끝말잇기 종료여부 판단
    
    // words의 길이만큼 반복
    for(let i=0; i<words.length; i++){
        if(i != 0){ // 첫 번째 단어가 아닐 때
            // 끝말과 현재 단어의 첫말이 같지 않거나, 이미 사용한 단어 중 현재 단어가 있다면
            if(lastChar !== words[i].slice(0, 1) || usedWords.includes(words[i])){
                 index = i;   // index에 i를 넣어줌
                 flag = true; // flag를 true로 초기화
                 break;       // 반복문 빠져나감 (중단)
             }else{
                 flag = false; // flag를 false로 초기화
             }
        }
        lastChar = words[i].slice(words[i].length-1, words[i].length); // 끝말 slice로 저장
        usedWords.push(words[i]); // 사용한 단어 배열에 현재 단어 추가
        cntTurn[i%n]++; // 참여자의 차례를 1씩 증가시킴 (%n을 통해 참여자 차례 배열의 인덱스를 벗어나지 않게 함)
    }
    
    if(flag === true){ // flag가 true라면
        return [index % n + 1 , cntTurn[index%n] + 1]; // 참여자의 번호와 차례를 담은 배열을 return
    }
    return [0, 0]; // flag가 false라면 [0, 0] return
}
