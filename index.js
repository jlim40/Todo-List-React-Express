const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/Todo');

console.log('keys.mongoURI', keys.mongoURI);
mongoose.connect(keys.mongoURI, err => {
  console.log(err);
});

const app = express();
app.use(bodyParser.json());

require('./routes/controlRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    console.log('dirname??', __dirname);
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
console.log('Port', PORT);
app.listen(PORT);
