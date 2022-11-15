const express = require('express');
const app = express();
const port = 3000;

app.get('/example', (req, res) => {
  setImmediate(() => {
    console.log('immediate');
  });

  setTimeout(() => {
    console.log('timeout');
  });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
