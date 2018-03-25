const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send({ text: "What's up baby!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
