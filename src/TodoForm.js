import React, { useState, useRef } from "react";
import DateRangeSharpIcon from "@material-ui/icons/DateRangeSharp";
import ControlPointSharpIcon from "@material-ui/icons/ControlPointSharp";
import { IconButton } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { DateTimePicker } from "@material-ui/pickers";
import moment from "moment";

function TodoForm({ addTask }) {
  const todoInput = useRef(null);
  const [date, setDate] = useState(moment());
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, date);
    setUserInput("");
    todoInput.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-form-item">
        <Input
          className="todo-input"
          value={userInput}
          disableUnderline={true}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
          ref={todoInput}
        />

        <DateTimePicker
          className="hidden"
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          value={date}
          onChange={setDate}
        />

        <IconButton className="calendar-icon" onClick={() => setIsOpen(true)}>
          <DateRangeSharpIcon style={{ color: "#5c5c5c" }} fontSize="large" />
        </IconButton>
        <IconButton type="submit">
          <ControlPointSharpIcon
            style={{ color: "#5c5c5c" }}
            fontSize="large"
          />
        </IconButton>
      </div>
    </form>
  );
}

export default TodoForm;
