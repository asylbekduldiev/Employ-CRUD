import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import Orders from './components/Order/order';
import Users from './components/Users/Users';
import Main from './components/Main/main';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* <aside className="sidebar"> */}
          <Main />
        {/* </aside> */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
