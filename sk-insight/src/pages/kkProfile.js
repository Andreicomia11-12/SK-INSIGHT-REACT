import React from 'react';
import { useNavigate } from 'react-router-dom';
import SKlogo from '../assets/logo.png';
import '../Dashboard.css';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
        <nav className="dashboard-nav">
        <h3 className='skb'>SANGGUNIANG KABATAAN</h3>
        <div className="nav-logo">
            <img src={SKlogo} alt="SK Logo" className="nav-logo-img" />
            <div className="logo-text">
                <h3 className='sko'>SK Official</h3>
                <span className="adds">Admin</span>
            </div>
        </div>

        <div className="nav-links">
          <button className={`nav-link${window.location.pathname === '/dashboard' ? ' active' : ''}`} onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className={`nav-link${window.location.pathname === '/kk-profile' ? ' active' : ''}`} onClick={() => navigate('/kk-profile')}>KK Profile</button>
        </div>

        <div className="nav-profile">
          <button onClick={() => navigate('/')} className="logout-btn">Logout</button>
        </div>
      </nav>
      
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>KK Profile</h1>
          <p>List of KK Residents</p>
        </div>


        <div className="table-container">
            <table className="kk-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Resident's Name</th>
                    <th>Age</th>
                    <th>Purok</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Juan Dela Cruz</td>
                    <td>18</td>
                    <td>Purok 1</td>
                    <td>Male</td>
                    <td>View Full Details >></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Santos</td>
                    <td>20</td>
                    <td>Purok 1</td>
                    <td>Male</td>
                    <td>View Full Details >></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pedro Gomez</td>
                    <td>17</td>
                    <td>Purok 1</td>
                    <td>Male</td>
                    <td>View Full Details >></td>
                </tr>
                </tbody>
            </table>
        </div>
        
      </main>

      
    </div>
  );
};

export default Dashboard; 