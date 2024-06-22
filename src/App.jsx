import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import Users from './components/Users/Users';
import Main from './components/Main/main';
import Goals from './components/Goals/Goals';
import Workouts from './components/Workouts/Workouts';
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
            <Route path='/workouts' element={<Workouts />}/>
            <Route path="/users" element={<Users />} />
            <Route path='/goals' element={<Goals/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
