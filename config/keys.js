// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  console.log('prod?', process.env.NODE_ENV);
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!
  console.log('dev?', process.env.NODE_ENV);
  module.exports = require('./dev');
}
