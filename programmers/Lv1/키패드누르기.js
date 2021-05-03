function solution(numbers, hand) {
    var answer = '';
    const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];
    let left_po = [3, 0];
    let right_po = [3, 2];
    let position = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7){
            answer += "L";
            left_po = [nums.findIndex((n) => n.includes(numbers[i])), 0];
        }else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9){
            answer += "R";
            right_po = [nums.findIndex((n) => n.includes(numbers[i])), 2];
        }else{
            position = [nums.findIndex((n) => n.includes(numbers[i])), 1];
            let moveLeft = Math.abs(position[0] - left_po[0]) + Math.abs(position[1] - left_po[1]);
            let moveRight = Math.abs(position[0] - right_po[0]) + Math.abs(position[1] - right_po[1]);
            if(moveLeft == moveRight){
                if(hand == "left"){
                    left_po = position;
                    answer += "L";
                }else{
                    right_po = position;
                    answer += "R";
                }
            }else if(moveLeft < moveRight){
                left_po = position;
                answer += "L";
            }else{
                right_po = position;
                answer += "R";
            }
        }
    }
    return answer;
}
