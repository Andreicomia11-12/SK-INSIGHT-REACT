
// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import SKlogo from '../assets/logo.png';
import './HomePage.css';

const HomePage = () => (
  <div>
    <Navbar />
    <div className="hero-section">
      <div className="hero-header">
        <img src={SKlogo} alt="SK Logo" className="hero-logo" />
        <div className="hero-sshee">
          <h1>
            <span className="hero-title-bold">SANGGUNIANG KABATAAN</span>
            <br />
            <span className="hero-title-sub">BARANGAY PUTING BATO WEST</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
);

// components/Navbar.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <nav className="bg-[#0A2C52] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png" // Palitan ng tamang logo path
              alt="SK-INSIGHT Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">SK–INSIGHT</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            <a href="#" className="text-white hover:underline font-medium">
              Home
            </a>

            {/* Profiling Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-[#163E74] px-4 py-2 rounded-full text-white font-medium focus:outline-none"
              >
                Profiling
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-black z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    KK Questionnaire
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Youth Profile
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:underline font-medium">
              Assistance
            </a>

            {/* Icons */}
            <div className="flex space-x-4">
              <button>
                <img
                  src="/user-icon.svg"
                  alt="User"
                  className="w-6 h-6"
                />
              </button>
              <button>
                <img
                  src="/bell-icon.svg"
                  alt="Notifications"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
