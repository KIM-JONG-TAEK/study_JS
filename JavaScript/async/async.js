// async & await clear style of using promise :)

// 1. async
async function fetchUser() {
    // return new Promise((resolve, reject) => { do network request in 10 secs...
    // resolve('ellie');
    return 'ellie';
    //});
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ?
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return '?';
}

async function getBanana() {
    await delay(3000);
    return '?';
}

// function getBanana() {     return delay(3000)     .then(() => '?'); }

async function pickFruits() {
    // return getApple()     .then(apple => {         return getBanana().then(banana
    // => '${aple} + ${banana}');     });
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise();
    const banana = await bananaPromise();
    return '${aple} + ${banana}';
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise
        .all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);



















