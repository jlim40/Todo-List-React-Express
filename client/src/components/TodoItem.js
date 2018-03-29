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
    const { text, checked, id, color, handleToggle, handleRemove } = this.props;
    console.log(color);
    return (
      <div className="todo-item" onClick={() => handleToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle does not get called
            handleRemove(id);
          }}
        >
          &times;
        </div>
        <div style={{ color }} className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default TodoItem;
