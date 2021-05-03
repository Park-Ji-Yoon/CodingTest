function solution(board, moves) {
    var answer = 0;
    let bowl = [];
    for(let m of moves){
        for(let i=0; i<board.length; i++){
            if(board[i][m-1] != 0){
                bowl.push(board[i][m-1]);
                board[i][m-1] = 0;
                break;
            }
        }
        for(let i=0; i<bowl.length-1; i++){
            if(bowl[i] === bowl[i+1]){
                bowl.splice(i, 2);
                answer += 2;
            }
        }
    }
    return answer;
}
