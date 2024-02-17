import React from "react";
import { AppUI } from "./AppUI";
import {useLocalStorage} from './useLocalStorage';


// const defaultTodos = [
//   { text: "Read in the morning", completed: true },
//   { text: "Study english", completed: false },
//   { text: "Finish jobs", completed: false },
//   { text: "Make lunch", completed: false },
// ];


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchtext = searchValue.toLocaleLowerCase();
      return todoText.includes(searchtext);
    }
  );


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); 
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); 
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      completedTodos={completedTodos} 
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
  
    />
  )
}

export default App;
