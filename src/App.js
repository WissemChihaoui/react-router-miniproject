import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './comp/Home';
import TaskList from './comp/TaskList';
import AddTask from './comp/AddTask';
import NotFound from './comp/NotFound';
import { TaskProvider } from './comp/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="app">
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tasks">Tasks</Link></li>
              <li><Link to="/add-task">Add Task</Link></li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default App;
