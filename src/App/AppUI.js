import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading"; 
import { TodosError } from "../TodosError"; 
import { TodosEmpty } from "../TodosEmpty"; 
import React from "react";

function AppUI({
    loading,
    error,
    completedTodos, 
    totalTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
          <TodoCounter 
            completed={completedTodos} total={totalTodos}
          />
    
          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.lenght === 0) && <TodosEmpty />}

            {searchedTodos.map((todo) => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
    
          <CreateTodoButton />
        </React.Fragment>
      );
};

export { AppUI };