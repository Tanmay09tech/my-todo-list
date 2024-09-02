import React, { useState } from "react";

function ToDoList() {
  // State to keep track of the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the current input value for the new task
  const [newTask, setNewTask] = useState("");

  // Function to handle changes in the input field and update the newTask state
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // Function to add a new task to the list of tasks
  function addTask() {
    if (newTask.trim() !== "") {
      // Add the new task to the list and reset the newTask input
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  // Function to delete a task from the list based on its index
  function deleteTask(index) {
    // Create a new array excluding the task at the specified index
    setTasks((tasks) => tasks.filter((_, i) => i !== index));
  }

  // Function to move a task up in the list based on its index
  function moveTaskUp(index) {
    // Check if the task is not already at the top of the list
    if (index > 0) {
      setTasks((tasks) => {
        // Create a copy of the current tasks array
        const newTasks = [...tasks];
        
        // Swap the current task with the one above it
        // Destructuring assignment to swap values
        [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
        
        // Return the updated tasks array with the swapped tasks
        return newTasks;
      });
    }
  }

  // Function to move a task down in the list based on its index
  function moveTaskDown(index) {
    // Check if the task is not already at the bottom of the list
    if (index < tasks.length - 1) {
      setTasks((tasks) => {
        // Create a copy of the current tasks array
        const newTasks = [...tasks];
        
        // Swap the current task with the one below it
        // Destructuring assignment to swap values
        [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
        
        // Return the updated tasks array with the swapped tasks
        return newTasks;
      });
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        {/* Input field for adding a new task */}
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInputChange}
        />
        {/* Button to add the new task */}
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Render the list of tasks */}
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task">{task}</span>
            {/* Button to delete the task */}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            {/* Button to move the task up */}
            <button className="up-button" onClick={() => moveTaskUp(index)}>
              Up 👆
            </button>
            {/* Button to move the task down */}
            <button className="down-button" onClick={() => moveTaskDown(index)}>
              Down 👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
