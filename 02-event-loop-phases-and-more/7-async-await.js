const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved time");
    }, time);
  });

async function fn() {
  console.log("async it's just syntactic sugar");

  const res = await sleep(100);

  console.log("the result ", res);
}

function nonAsyncFn() {
  console.log("non async function");

  sleep(100).then((res) => {
    console.log("the result ", res);
  });
}

fn().then((res) => console.log);

nonAsyncFn();
