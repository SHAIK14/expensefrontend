import React, { useState } from "react";
import "./expense.css";
const Expense = () => {
  const [task, setTask] = useState("");
  const [taskdata, setaddTaskData] = useState([]);
  const taskhandle = () => {
    setaddTaskData([...taskdata, task]);
  };
  return (
    <div className="expense">
      <div className="taskbar">
        <input
          type="text"
          value={task}
          className="bar"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="submit" onClick={taskhandle}>
          Add task
        </button>
      </div>
      {taskdata.map((data) => {
        return <li>{data}</li>;
      })}
    </div>
  );
};

export default Expense;
