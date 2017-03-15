const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/api', (req, res)=> {
  res.send("successuful！");
});

app.listen(3000, ()=> {
  console.log("Server started: http://localhost:3000")
});