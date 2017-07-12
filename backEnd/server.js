const express = require('express');
const parser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();

app.use(parser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.post('/api/message', function(req, res) {
  console.log(req.body);
  res.status(200);
})

const server = app.listen(port, () => console.log(`listening on port ${port}`));
