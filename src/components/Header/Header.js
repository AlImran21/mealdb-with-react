import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/home">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/about-us">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;