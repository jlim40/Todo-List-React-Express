import React from 'react';
import './Form.css';

const Form = ({value, color, handleChange, handleCreate, handleKeyPress}) => {
  return (
    <div className="form">
      <input value={value} style={{color}} onChange={handleChange} onKeyPress={handleKeyPress} />
      <div className="create-button" onClick={handleCreate}>
        Add
      </div>
    </div>
  );
};

export default Form;
