import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Task Manager</h1>
      <p>Manage your tasks efficiently.</p>
      <nav>
        <ul>
          <li><Link to="/tasks">View Tasks</Link></li>
          <li><Link to="/add-task">Add Task</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
