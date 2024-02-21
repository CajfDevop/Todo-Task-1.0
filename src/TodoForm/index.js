import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const [newTodoValue, setnewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setnewTodoValue(event.target.value)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new ToDo</label>
      <textarea
        placeholder="ex: study programming"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
      <button 
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
      >Cancel</button>
      <button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
        >Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
