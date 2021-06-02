import React, { useState, useRef, useEffect } from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { IconButton, InputAdornment } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import moment from "moment";

function TodoForm({ addTask }) {
  const todoInput = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [date, setDate] = useState(moment());
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
    <div className="todo-form-container">
      <div className="todo-form-item">
        <form className="todo-form-input" onSubmit={handleSubmit}>
          <input
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Enter task..."
            ref={todoInput}
          />
          <DateTimePicker
            value={date}
            onChange={setDate}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ScheduleIcon style={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
