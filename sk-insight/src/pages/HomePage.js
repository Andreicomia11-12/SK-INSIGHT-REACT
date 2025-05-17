// src/pages/HomePage.js
import React from 'react';
import Logo from '../assets/logo.png';
import '../Homepage.css'

const HomePage = () => {
  return (
    <>
      <div className="homepage">

        <section className="hero">
          
          <div className="text-section">
            <img src={Logo} alt="SK Logo" className="logos" />
            <p className='skk'>SANGGUNIANG KABATAAN</p> 
            <br />
            <p>BARANGAY PUTING BATO WEST</p>
          </div>
          <h1 className="headline">
            Empowering The Youth
            <br />
            Building a Brighter Future
          </h1>
        </section>
    </div>
    </>
  )

};

export default HomePage;
