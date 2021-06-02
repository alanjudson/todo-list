import React, { useState, useEffect } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import firebase from "@firebase/app";
import "firebase/firestore";
import "./App.css";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import moment from "moment";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const todosRef = firebase.firestore().collection("todos");

  const getTodos = () => {
    setLoading(true);
    todosRef.orderBy("time", "desc").onSnapshot((querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data().date.seconds);
        const date = doc.data().date.seconds * 1000;
        todos.push({
          id: doc.id,
          task: doc.data().task,
          completed: doc.data().completed,
          date: moment(date),
        });
      });
      setTodoList(todos);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleToggle = (id) => {
    console.log(id);
    console.log(todoList);
    todoList.map((task) => {
      return task.id === id ? updateValue(task) : { ...task };
    });
  };
  const deleteItem = (todo) => {
    todosRef
      .doc(todo.id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  const updateValue = (todo) => {
    todosRef
      .doc(todo.id)
      .update({
        id: todo.id,
        task: todo.task,
        date: todo.date._d,
        completed: !todo.completed,
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  const addTask = (userInput, date) => {
    todosRef.doc().set({
      task: userInput,
      date: date._d,
      completed: false,
      time: new Date(),
    });
  };

  const handleFilter = () => {
    todoList.forEach((task) => {
      return task.completed ? deleteItem(task) : null;
    });
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App app-wrap">
        <Header />
        <div className="content">
          <TodoForm addTask={addTask} />
          <TodoList
            todoList={todoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
