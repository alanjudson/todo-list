import React, { useState, useRef, useEffect } from "react";
import DateRangeSharpIcon from "@material-ui/icons/DateRangeSharp";
import ControlPointSharpIcon from "@material-ui/icons/ControlPointSharp";
import { IconButton } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import moment from "moment";
import { DateTimePicker } from "react-rainbow-components";

function TodoForm({ addTask }) {
  const todoInput = useRef(null);
  const timePicker = useRef(null);
  const [date, setDate] = useState(new Date());
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, date);
    setUserInput("");
    setDate(new Date());
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
          style={{ display: "none" }}
          ref={timePicker}
          value={new Date(date)}
          onChange={(value) => setDate(moment(value))}
          hideLabel={true}
        />

        <IconButton
          className="calendar-icon"
          onClick={() => {
            timePicker.current.click();
          }}
        >
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
