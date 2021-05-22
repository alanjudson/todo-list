import React from "react";

function TodoItem({ todo, handleFilter, handleToggle }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    handleToggle(id);
  };
  return (
    <div
      className={todo.complete ? "strike" : ""}
      onClick={(e) => {
        handleClick(e, todo.id);
      }}
    >
      {todo.task}
    </div>
  );
}

export default TodoItem;
