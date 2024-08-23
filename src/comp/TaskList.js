import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, toggleTaskCompletion, deleteTask } = useContext(TaskContext);
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return task.completed;
    if (filter === 'Incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <div className="filters">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Incomplete')}>Incomplete</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.name}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
