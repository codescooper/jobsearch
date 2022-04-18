import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth/Auth";

export default function Navbar() {
    return (
        <>
            <header className="App-header">
            <div className='app-title'>
                <p className="App-logo">
                2%
                </p>  
            </div>
            <ul className='nav-menu'>
                <li>
                <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li>
                <Link to="/about" className='nav-link'>About</Link>
                </li>
                <li>
                <Link to="/contact" className='nav-link'>Contact</Link>
                </li>
            </ul>
            <Auth />
            </header>
        </>
    );
}
