const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`NannyConnect app listening at http://localhost:${port}`);
});
