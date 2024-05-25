import './main.css';

import React, { Component } from 'react'

import { Outlet, Link } from "react-router-dom";
import {Order} from '..Order/order.js'

const Main = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to={Order}>Orders</Link>
          </li>
          <li>
            <Link to="./Users">Users</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};


export default Main;
