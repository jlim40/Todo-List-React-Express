import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    /*
      todos: An array that contains todo objects
      onToggle: A function that toggles checkbox
      onRemove: A function that deletes an todo-item
    */
    const { todos, handleToggle, handleRemove } = this.props;
    // Destructuring properties from each item in the todos array
    const todoList = todos.map(({ id, text, checked, color }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        color={color}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
