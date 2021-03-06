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
  return 'π';
}

async function getMelon(){
  await delay(3000);
  return 'π';
}

function getBanana(){
  return delay(3000).then(() => 'π');
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

// λ³λ ¬ μ€ν
async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}, ${banana}`;
}
pickFruits();

// 3. UsefulPromise APIs
// allμ λͺ¨λ  λ°°μ΄ μμ μ€νν¨
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// μ μΌ λΉ¨λ¦¬ μ²λ¦¬λ κ²λ§ return
function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}