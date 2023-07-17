import React, { useState } from "react";


const TaskList = () => {
  const [tasks, setTasks] = useState(["Read", "Eat", "Drink"]);
  const [newTask, setNewTask] = useState("");
  const [count, setCount] = useState(3);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if (newTask !== "") {
      if (!tasks.includes(newTask)) {
        setTasks([...tasks, newTask]);
        setCount(count + 1);
      }
      setNewTask("");
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
    setCount(count - 1);

  };

  return (
    <div className="container  mx-0 px-0">
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
      <p className="d-flex text-secondary border-top mt-4 mb-0 ps-3 pt-2 pb-0">{count} item left</p>
    </form>
    </div>
  );
};

export default TaskList;
