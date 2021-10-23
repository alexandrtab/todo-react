import { useState } from "react";
import moment from "moment";
import Input from "./components/Input";
import List from "./components/List";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  const addTodo = (userInput, date) => {
    if (userInput && date) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        date: date,
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
      <Calendar date={startDate} setDate={setStartDate} />
      <Input addTask={addTodo} date={startDate} />
      {todos.map((todo) => {
        return (
          <List
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

export default App;
