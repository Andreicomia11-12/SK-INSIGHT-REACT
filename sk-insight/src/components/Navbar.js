// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import SKlogo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Left: Logo + Title */}
      <div className="navbar-left">
        <img src={SKlogo} alt="SK Logo" className="navbar-logo" />
        <span className="navbar-title">SK-INSIGHT</span>
      </div>

      {/* Center: Hamburger & Links */}
      <div className="navbar-center">
        <div className="navbar-hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li
            className="dropdown"
            ref={dropdownRef}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Profiling <span className="dropdown-arrow">&#9662;</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => setMenuOpen(false)}>LGBTQ Profiling</li>
                <li onClick={() => setMenuOpen(false)}>KK Profiling</li>
              </ul>
            )}
          </li>
          <li onClick={() => setMenuOpen(false)}>Assistance</li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="navbar-icons">
        <FaUser className="navbar-icon" />
        <FaBell className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
