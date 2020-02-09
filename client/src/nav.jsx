import React, {Component} from 'react';
import './components/css/App.css';
import {Link} from "react-router-dom";
import {useTheme} from "./themecontext";


function Nav() {
    const navStyle = {
        color: "white"
    };
    const themeState = useTheme();
    return (
        <nav className="nav">
            <button onClick={() => themeState.toggle()}>
                {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/api'>
                    <li>API REF</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Nav;
