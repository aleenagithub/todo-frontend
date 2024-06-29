import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks'); // Adjust endpoint as per your backend setup
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // Fetch tasks on component mount

  // Function to handle adding a new task
  const handleAddTask = async () => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTask }),
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      fetchTasks(); // Fetch tasks again to update the list
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      fetchTasks(); // Fetch tasks again to update the list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>Add new Task </h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name}
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
            <Link to={`/edit/${task._id}`}>Edit</Link> {/* Navigate to edit page */}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default List;
