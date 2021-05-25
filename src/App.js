import React, { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

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

  const addTask = (userInput, date) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      {
        id: todoList.length + 1,
        task: userInput,
        date: date,
        complete: false,
      },
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
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Header />
        <TodoList
          todoList={todoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
        <TodoForm addTask={addTask} />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
