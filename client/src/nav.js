import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {
        color: "white"
    };

        return (
            <nav className="nav">
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
