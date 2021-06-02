import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem({ todo, handleFilter, handleToggle, deleteItem }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    handleToggle(id);
  };
  const time = `${todo.date._d.getHours()}:${todo.date._d.getMinutes()}`;

  return (
    <div className="todo-item">
      <div
        className={todo.completed ? "strike" : ""}
        onClick={(e) => {
          handleClick(e, todo.id);
        }}
      >
        {todo.task} | {todo.date._d.toDateString()} {time}
      </div>
      <IconButton
        onClick={() => {
          deleteItem(todo);
        }}
      >
        <DeleteIcon className="delete-icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default TodoItem;
