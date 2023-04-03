// create a navigation bar component
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__link">Home</Link>
            <Link to="/about" className="navbar__link">About</Link>
            <Link to="/contact" className="navbar__link">Contact</Link>
        </div>
    )
}

export default Navbar