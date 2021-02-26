const express = require('express');
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(`${req.ip} ${req.get('User-Agent')}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})