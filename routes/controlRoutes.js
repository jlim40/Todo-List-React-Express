const mongoose = require('mongoose');
const Todo = mongoose.model('todos');

module.exports = app => {
  // Get a list of todo items
  app.get('/api/todo', async (req, res) => {
    const todos = await Todo.find({}, (err, todos) => {
      if (err) {
        res.status(500).json(err);
      }
      res.send(todos);
    });
  });

  // Save an item
  app.post('/api/todo', async (req, res) => {
    const { content, color } = req.body;

    // Create an instance of model SomeModel
    const todoData = { content, color };
    await new Todo(todoData).save((err, todo) => {
      if (err) return res.send('Some error occured!');
      res.send(todo);
    });
  });

  // Delete an item
  app.delete('/api/todo/:id', async (req, res) => {
    // Check for ID validity
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({
        message: 'INVALID ID'
      });
    }
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
      if (err) throw err;
      res.send({ success: true });
    });
  });

  // Toggle 'checked'
  app.put('/api/todo', async (req, res) => {
    const { _id, checked } = req.body;
    Todo.findOneAndUpdate({ _id }, { checked }, (err, todo) => {
      if (err) {
        return res.status(500).json({
          message: 'Could not edit todo'
        });
      }
      res.json(todo);
    });
  });
};
