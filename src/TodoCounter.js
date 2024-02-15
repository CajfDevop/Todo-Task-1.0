import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (

    total == completed ?

      <h1 className="TodoCounter">
        Congratulations!!! You have completed all your TODOs
      </h1>

      :

      <h1 className="TodoCounter">
        You've completed <span>{completed}</span> of <span>{total}</span> TODOs
      </h1>
  );
}

export { TodoCounter };
