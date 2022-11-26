const express = require('express');
const app = express();
const port = 3000;

app.get('/example', (_req, res) => {
  res.send('Hello, world! 👋');

  for (let i = 0; i < 1000; i++) {
    Promise.resolve().then(() => {
      console.log('✋ Blocking');
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
