import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  return totalTodos === 0 ? (
    <h1 className="TodoCounterComplete">You still don't have ToDos</h1>
  ) : totalTodos === completedTodos ? (
    <h1 className="TodoCounterComplete">
      Congratulations!!! You have completed all your TODOs
    </h1>
  ) : (
    <h1 className="TodoCounter">
      You've completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
