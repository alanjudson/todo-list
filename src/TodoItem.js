import React from "react";
import moment from "moment";
function TodoItem({ todo, handleFilter, handleToggle }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    handleToggle(id);
  };
  console.log(todo);
  return (
    <div
      className={todo.complete ? "strike" : ""}
      onClick={(e) => {
        handleClick(e, todo.id);
      }}
    >
      {todo.task}
      {todo.date ? todo.date._d.toDateString() : "no date"}
    </div>
  );
}

export default TodoItem;
