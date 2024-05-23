import './main.css';

import React, { Component } from 'react'
import Users from '../Dashboard/Users'

const Main = () => {

    return(
        <div className="sidebar">
            <img src="" alt="" />
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#" class="active">Orders</a></li>
                <li><Link to={Users}>Users</Link></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Merchants</a></li>
            </ul>
    </div>
    )
}

export default Main;
