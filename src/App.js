import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todoList, setTodoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, task: userInput, complete: false },
    ];
    setTodoList(copy);
  };

  const handleFilter = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };
  return (
    <div className="App">
      <Header />
      <TodoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
