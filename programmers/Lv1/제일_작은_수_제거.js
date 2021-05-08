function solution(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    return (!arr.length)?[-1]:arr;
}
