// async & await

// 1. async
async function fetchUser(){
  return new Promise((resolve, reject) => {
    return 'jiyoon';
  });
}
// function fetchUser(){
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve('jiyoon');
//   });
// }

const user = fetchNumber();
user.then(console.log);
console.log(user);

//  await
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(3000);
  return '🍎';
}

async function getMelon(){
  await delay(3000);
  return '🍈';
}

function getBanana(){
  return delay(3000).then(() => '🍌');
}

// function pickFruits(){
//   return getApple()
//     .then(apple => {
//       return getBanana()
//         .then(banana => `${apple}, ${banana}`);
//     })
// }

// async function pickFruits(){
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple}, ${banana}`;
// }

// 병렬 실행
async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}, ${banana}`;
}
pickFruits();

// 3. UsefulPromise APIs
// all은 모든 배열 요소 실행함
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// 제일 빨리 처리된 것만 return
function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}