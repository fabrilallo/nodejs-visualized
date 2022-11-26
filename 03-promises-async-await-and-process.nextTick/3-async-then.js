async function foo() {
  return 'async result';
}

 function run() {
  foo().then((result) => {
    console.log(result);
    console.log('after then');
  });
}

run();
