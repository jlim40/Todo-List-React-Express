import React, { Component } from 'react';
import axios from 'axios';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import Palette from './components/Palette';
import TodoItemList from './components/TodoItemList';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

    this.state = {
      input: '',
      color: '#343a40',
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelectColor = this.handleSelectColor.bind(this);
  }

  async componentDidMount() {
    console.log('cdm start');
    const response = await axios.get('/api/todo');
    const todos = await response.data;
    console.log('response');
    console.log(response);
    console.log('todos');
    console.log(todos);
    this.setState({ todos: todos });
    console.log('cdm finished');
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleCreate = async () => {
    const { input, todos, color } = this.state;

    const todoData = {
      content: input,
      color
    };

    console.log('handle create start');
    const response = await axios.post('/api/todo', todoData);
    console.log(response);
    const todo = await response.data;
    console.log(todo);
    console.log('handle create finish');

    this.setState({
      input: '', // empty the input
      // Add it to the array using concat
      // concat creates a new array
      todos: todos.concat({
        _id: todo._id,
        content: todo.content,
        checked: todo.checked,
        color: todo.color
      })
    });
  };

  handleKeyPress = e => {
    // Call handleCreate if enter is pressed
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = async id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo._id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    console.log(nextTodos[index]);
    const response = await axios.put('/api/todo', nextTodos[index]);
    if (!response.error) {
      this.setState({
        todos: nextTodos
      });
    }
  };

  handleRemove = async id => {
    await axios.delete(`/api/todo/${id}`);
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo._id !== id)
    });
  };

  handleSelectColor = color => {
    this.setState({
      color
    });
  };

  render() {
    const { input, todos, color } = this.state;

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor,
      colors
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            handleChange={handleChange}
            handleCreate={handleCreate}
            handleKeyPress={handleKeyPress}
            color={color}
          />
        }
        palette={
          <Palette
            colors={colors}
            selected={color}
            handleSelectColor={handleSelectColor}
          />
        }
      >
        <TodoItemList
          todos={todos}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
