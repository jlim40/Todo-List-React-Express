const express = require('express');

const app = express();

app.get('/api/message', (req, res) => {
  res.send({ text: 'This is a message from the server side' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
