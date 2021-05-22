import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, handleFilter, handleToggle }) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoList;
