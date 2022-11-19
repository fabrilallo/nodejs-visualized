const fs = require('fs');

fs.readFile(__filename, (_data) => {
  const promise = new Promise((resolve, _reject) => {
    console.log('inside promise definition');

    setTimeout(() => {
      console.log('timeout');

      resolve('resolved');

      console.log('still timeout');

      process.nextTick(() => {
        setImmediate(() => console.log('immediate'));
      });
    });
  });

  promise.then((data) => {
    console.log('then');
    console.log(data);
  });
});
