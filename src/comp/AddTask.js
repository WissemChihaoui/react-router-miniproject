import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskContext';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    addTask(taskName);
    setTaskName('');
    navigate('/tasks');
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
