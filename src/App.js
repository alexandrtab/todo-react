import { useState } from "react";
import {Input} from "./components/Input";
import {Todo} from "./components/Todo";
import "./App.css";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newTask]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h2>Tasks number: {todos.length}</h2>
      </header>
      <h3>Choose the date:</h3>
      <Input addTask={handleAddTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTodo}
          />
        );
      })}
    </div>
  );
}
