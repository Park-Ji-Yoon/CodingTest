function solution(n, arr1, arr2) {
    var answer = [];
    let arr01 = [];
    let arr02 = [];
    for(let i=0; i<arr1.length; i++){
        let binary = arr1[i].toString(2);
        if(binary.length < n){
            binary = "0".repeat(n-binary.length) + binary;
        }
        arr01.push(binary);
    }
    for(let i=0; i<arr2.length; i++){
        let binary = arr2[i].toString(2);
        if(binary.length < n){
            binary = "0".repeat(n-binary.length) + binary;
        }
        arr02.push(binary);
    }
    for(let i=0; i<n; i++){
        let str = "";
        for(let j=0; j<n; j++){
            if(arr01[i][j] == "0" && arr02[i][j] == "0"){
                str += " ";
            }else{
                str += "#";
            }
        }
        answer.push(str);
    }
    return answer;
}
