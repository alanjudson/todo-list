import React, { useState } from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import moment from "moment";

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const [date, setDate] = useState(moment());
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, date);
    setUserInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <DatePicker value={date} onChange={setDate} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
