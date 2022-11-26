async function foo() {
  return 'async result';
}

async function run() {
  const result = await foo();
  console.log(result);
  console.log('after then');
}

run();
