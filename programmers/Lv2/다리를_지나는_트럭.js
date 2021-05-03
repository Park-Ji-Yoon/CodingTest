function solution(bridge_length, weight, truck_weights) {
    let second = 0;
    let bridge = new Array(bridge_length).fill(0);
    while(truck_weights.length > 0){
        bridge.shift();
        let sum = bridge.reduce((acc, cur) => acc + cur);
        if(truck_weights[0] + sum <= weight) {
            bridge.push(truck_weights[0]);
            truck_weights.shift();
        }else{
            bridge.push(0);
        }
        second++;
    }
    return second + bridge_length;
}
