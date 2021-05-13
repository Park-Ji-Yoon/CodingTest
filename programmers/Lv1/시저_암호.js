function solution(s, n) {
    let answer = ''; // return할 값 answer 초기화
    const alphSmall = 'abcdefghijklmnopqrstuvwxyz'; // 알파벳 소문자를 문자열로 초기화
    const alphBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 알파벳 대문자를 문자열로 초기화
    
    // s의 길이만큼 반복
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){ // s[i]가 공백이면
            answer += " "; // answer에 공백추가
            continue; // continue를 통해 다음 반복으로 직행함
        }
        let change = s[i].toUpperCase(); // s[i]를 대문자로 바꾼 걸 change에 초기화
        // 원래 s[i]와 대문자로 변환한 change가 다르면 (원래 소문자였으면) 
        // alphSmall에서 원래 s[i]의 위치를 구하고 n을 더한 후 26으로 나눈 인덱스의 값을 answer에 더한다
        if(s[i] !== change) answer += alphSmall[(alphSmall.indexOf(s[i]) + n) % alphSmall.length];
        // 원래 s[i]와 대문자로 변환한 change가 같으면 (원래 대문자였으면) 
        // alphBig에서 원래 s[i]의 위치를 구하고 n을 더한 후 26으로 나눈 인덱스의 값을 answer에 더한다
        else answer += alphBig[(alphBig.indexOf(s[i]) + n) % alphBig.length];
    }
    return answer; // answer를 return
}
