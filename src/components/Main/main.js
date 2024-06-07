import React from 'react';

import { Outlet, Link } from 'react-router-dom';
import './main.css';

const Main = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>VIAJIO</h2>
      </div>
      <nav className='Nav'>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/Workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Goals">Goals</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
