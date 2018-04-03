const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  content: {
    type: 'string'
  },
  color: String,
  checked: {
    type: Boolean,
    default: false
  }
});

mongoose.model('todos', todoSchema);
