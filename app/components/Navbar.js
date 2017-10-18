import React, {Component} from 'react';
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <NavLink to='/campuses'><li>Campuses</li></NavLink>
                <NavLink to='/students'><li>Students</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar

// className='nav nav-pills'