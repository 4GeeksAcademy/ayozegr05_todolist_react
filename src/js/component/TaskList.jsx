import React, { useState } from "react";


const TaskList = () => {
  const [tasks, setTasks] = useState(["Read", "Eat", "Drink"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
    <form className="mt-4" onSubmit={handleFormSubmit}>
      <input
      className="mb-4 p-2"
        type="text"
        placeholder="Write a new task"
        value={newTask}
        onChange={handleInputChange}
      />
      <div className="d-flex justify-content-center contenedorul">
      <ul className="list-group custom-list-group">
        {tasks.map((task) => (
          <li className="list-group-item d-flex justify-content-between" key={task}>
            {task}
            <span className="remove-icon" onClick={() => handleRemoveTask(task)}><i className="fas fa-trash"></i></span>
          </li>
        ))}
      </ul>
      </div>
    </form>
    </div>
  );
};

export default TaskList;
