function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    for(let a of arr){
        for(let j=0; j<a.length; j++){
            if(j % 2 == 0){
                answer += a[j].toUpperCase();
            }else{
                answer += a[j].toLowerCase();
            }
        }
        answer += " ";
    }
    return answer.slice(0, answer.length-1);
}
