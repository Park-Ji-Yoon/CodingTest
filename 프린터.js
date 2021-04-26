function solution(priorities, location) {
    let reqPos = location;
    let arr = [];
    while(true){
        if(priorities[0] < Math.max(...priorities)){
            priorities.push(priorities[0]);
            priorities.shift();
            (reqPos === 0 ? reqPos = priorities.length - 1 : reqPos--);
        }else{
            arr.push(priorities[0]);
            priorities.shift();
            if(reqPos === 0){
                break; 
            }else{
                reqPos--;
            }
        }
    }
    return arr.length;;
}
