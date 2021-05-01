function solution(clothes) {
    let nameArr = []; // 옷 종류 문자열을 담을 배열 초기화
    let cntArr = [];  // 옷 종류별 개수를 담을 배열 초기화
    
    // 입력받은 clothes배열에서 한 요소씩 가져옴
    for(let cloth of clothes){ 
        if(nameArr.includes(cloth[1])){ // cloth[1]은 옷 종류 문자열이 담겼다. nameArr에 cloth[1]이 이미 있다면
            cntArr[nameArr.indexOf(cloth[1])]++; // 해당 옷 종류의 개수를 세는 cntArr인덱스를 찾아가서 1을 더해준다
        }else{ // nameArr에 cloth[1]이 없다면 (처음 나오는 옷 종류라면)
            nameArr.push(cloth[1]); // nameArr에 옷 종류 문자열 추가
            cntArr.push(2);         // cntArr에 2을 추가한다. (1이 아닌 이유는 옷을 하나만 입는 경우를 미리 고려했기 때문이다.)
        }
    }
    
    // cntArr의 값들을 누적곱 시킨 후, 1을 빼서(아무것도 안 입는 경우) return한다 
    return cntArr.reduce((acc, cur) => acc * cur) - 1;
}
