// src/components/Navbar/Navbar.js
import React from 'react';
import NavbarLinks from './NavbarLinks'; // Import the new NavbarLinks component
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#hero" className="navbar-logo">Walcott</a>
        <NavbarLinks />  {/* Use NavbarLinks here */}
      </div>
    </nav>
  );
};

export default Navbar;
