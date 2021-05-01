import React from 'react';
import MenuNavbar from './MenuNavbar/MenuNavbar';
import MiddleNavbar from './MiddleNavbar/MiddleNavbar';
import TopNavbar from './TopNavbar/TopNavbar';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
    return (
        <div className="navbar-container">
            <TopNavbar cartItems= {cartItems} />
            <MiddleNavbar />
            <MenuNavbar />
        </div>
    )
};

export default Navbar;