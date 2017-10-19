import React, {Component} from 'react';
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <div className="nav-item"><NavLink className="nav-link" to='/campuses'><li>Campuses</li></NavLink></div>
                <div className="nav-item"><NavLink className="nav-link" to='/students'><li>Students</li></NavLink></div>
            </ul>
        </nav>
    )
}

export default Navbar

// className='nav nav-pills'