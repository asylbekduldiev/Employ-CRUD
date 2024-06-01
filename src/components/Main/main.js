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
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
