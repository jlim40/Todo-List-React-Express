import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import Palette from './components/Palette';
import TodoItemList from './components/TodoItemList';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
    this.id = 3;

    this.state = {
      input: '',
      color: '#343a40',
      todos: [
        { id: 0, text: ' 리액트 소개', checked: false },
        { id: 1, text: ' 리액트 소개', checked: true },
        { id: 2, text: ' 리액트 소개', checked: false }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelectColor = this.handleSelectColor.bind(this);
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // empty the input
      color: color,
      // Add it to the array using concat
      // concat creates a new array
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    // Call handleCreate if enter is pressed
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
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
          color={color}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
