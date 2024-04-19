import React, { useState } from "react";
import "./DateInput.css";

let DateInput = ({ onDateSelection, onCancel, isTimerOn }) => {
  const [date, setDate] = useState("");
  console.log(date);
  const submit = (e) => {
    e.preventDefault();
    onDateSelection(date);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="date-input"
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      ></input>
      {isTimerOn ? (
        <button type="button" onClick={onCancel} className="button">
          Cancel Timer
        </button>
      ) : (
        <button type="submit" className="button">
          Start Timer
        </button>
      )}
    </form>
  );
};
export default DateInput;
