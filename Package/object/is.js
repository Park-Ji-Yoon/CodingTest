console.log(Object.is('jiyoon', 'jiyoon'));
console.log(Object.is(window, window));

// 특별한 경우
console.log(Object.is(0, -0));            
console.log(Object.is(-0, -0));           
console.log(Object.is(NaN, 0/0));        