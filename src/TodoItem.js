import React from "react";
import { IconButton } from "@material-ui/core";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem({ todo, handleFilter, handleToggle, deleteItem }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    handleToggle(id);
  };
  const time = `${todo.date._d.getHours()}:${todo.date._d.getMinutes()}`;

  return (
    <div
      className={todo.completed ? "todo-completed todo-item" : "todo-item"}
      onClick={(e) => {
        handleClick(e, todo.id);
      }}
    >
      {todo.completed ? (
        <CheckCircleRoundedIcon style={{ color: "green" }} fontSize="large" />
      ) : (
        <CheckCircleRoundedIcon fontSize="large" />
      )}

      <div className={todo.completed ? "strike" : ""}>
        {"  "} {todo.task} | {todo.date._d.toDateString()} {time}
      </div>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          deleteItem(todo);
        }}
      >
        <DeleteIcon className="delete-icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default TodoItem;
