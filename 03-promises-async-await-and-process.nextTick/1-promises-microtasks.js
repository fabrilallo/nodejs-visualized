const promise1 = new Promise(function callback(resolve, _reject) {
  resolve();
});

const promise2 = new Promise(function callback(resolve, _reject) {
  resolve();
});

promise1.then(() => {
  console.log('first promise');
});

promise2.then(() => {
  console.log('second promise');
});
