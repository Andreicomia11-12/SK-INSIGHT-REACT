
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

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0A2C52] text-white shadow-md rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png" // ← Make sure this path is correct
              alt="SK-INSIGHT Logo"
              className="h-10 w-10 rounded-full border"
            />
            <span className="text-xl font-bold">SK–INSIGHT</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="hover:underline font-medium">
              Home
            </Link>

            {/* Profiling Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-2 rounded-full font-medium hover:bg-[#163E74] transition"
              >
                Profiling
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-black z-10">
                  <Link
                    to="/kk-questionnaire"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    KK Questionnaire
                  </Link>
                  <Link
                    to="/youth-profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Youth Profile
                  </Link>
                </div>
              )}
            </div>

            <Link to="/assistance" className="hover:underline font-medium">
              Assistance
            </Link>

            {/* Icons */}
            <div className="flex space-x-3 bg-[#163E74] px-4 py-2 rounded-full">
              <button>
                <img src="/user-icon.svg" alt="User" className="w-5 h-5" />
              </button>
              <button>
                <img src="/bell-icon.svg" alt="Notifications" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

