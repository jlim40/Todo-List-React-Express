import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = (props) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        To do List
      </div>
      <section className="palette-wrapper">
        {props.palette}
      </section>
      <section className="form-wrapper">
        {props.form}
      </section>
      <section className="form-wrapper">
        {props.children}
      </section>
    </main>
  );
};

export default TodoListTemplate;
