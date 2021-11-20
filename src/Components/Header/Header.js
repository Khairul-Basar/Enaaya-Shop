import React from 'react';
import './Header.css'
import img from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={img} alt="" /><span className="logo-title">Shop</span>
            </div>
            
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage-Inventory-Here</a>
            </nav>
        </div>
    );
};

export default Header;