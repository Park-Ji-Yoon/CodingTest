function solution(n) {
    let oneCnt = n.toString(2).split('').filter((one) => one === '1').length;
    let i = n + 1;
    while(true){
        let num = i.toString(2).split('').filter((one) => one === '1').length;
        if(oneCnt === num){
            break;
        }
        i++;
    }
    return i;
}
