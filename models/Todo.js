const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  content: {
    type: 'string',
    required: true,
    match: /[a-zA-Z0-9]+/
  },
  color: String,
  checked: {
    type: Boolean,
    default: false
  }
});

mongoose.model('todos', todoSchema);
