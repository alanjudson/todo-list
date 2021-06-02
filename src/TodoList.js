import React from "react";
import TodoItem from "./TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function TodoList({ todoList, handleFilter, handleToggle, deleteItem }) {
  return (
    <TransitionGroup>
      {todoList.map((todo) => {
        return (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="transition"
            in={true}
          >
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
              deleteItem={deleteItem}
            />
          </CSSTransition>
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </TransitionGroup>
  );
}

export default TodoList;
