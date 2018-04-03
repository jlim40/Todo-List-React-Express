import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    /*
      text: Todo content
      checked: A boolean whether if an item is checked
      id: todo item's unique id
      handleToggle: A function that toggles checkbox
      handleToggle: A function that deletes an todo-item
    */
    const {
      content,
      checked,
      id,
      color,
      handleToggle,
      handleRemove
    } = this.props;
    return (
      <div className="todo-item" onClick={() => handleToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // Prevents from calling onToggle
            handleRemove(id);
          }}
        >
          &times;
        </div>
        <div style={{ color }} className={`todo-text ${checked && 'checked'}`}>
          <div>{content}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
