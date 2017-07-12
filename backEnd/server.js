const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

app.post('/api/message', function(req, res) {
  console.log(req.body);
  res.status(200);
})

const server = app.listen(port, () => console.log(`listening on port ${port}`));
