// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <>
        <h1>Welcome to the Home Page!</h1>;
        <div className="homepage">
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="SK Logo" className="logo" />
          <span className="brand">SK-INSIGHT</span>
        </div>
        <nav className="navbar-right">
          <a href="#">Home</a>
          <a href="#">Profiling</a>
          <a href="#">Assistance</a>
          <div className="user-icons">
            <span>👤</span>
            <span>🔒</span>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="text-section">
          <h2>SANGGUNIANG KABATAAN</h2>
          <h3>BARANGAY PUTING BATO WEST</h3>
        </div>
        <div className="color-wave" />
        <h1 className="headline">
          Empowering The Youth<br />Building a Brighter Future
        </h1>
      </section>
    </div>
    </>
  )

};

export default HomePage;
