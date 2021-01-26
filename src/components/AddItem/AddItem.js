import React, { useState } from 'react';
import './AddItem.scss';

const AddItem = ({ handleTodoState }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleTodoState(item);
    setItem("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={item}
        onChange={event => setItem(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default AddItem;
