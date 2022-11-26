app.get('/example', (_req, res) => {
  res.send('Hello, world! 👋');

  for (let i = 0; i < 1000; i++) {
    Promise.resolve().then(() => {
      console.log('✋ Blocking');
    });
  }
});