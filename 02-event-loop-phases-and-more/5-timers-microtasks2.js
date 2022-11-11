const promise = new Promise((resolve, _reject) => {
  setTimeout(() => {
    console.log("before resolve");
    resolve(1);
    console.log('after resolve')

  }, 5000);

  console.log("inside promise defintion");
});

console.log(promise);
promise.then((result) => {
  console.log("result", result);
});

