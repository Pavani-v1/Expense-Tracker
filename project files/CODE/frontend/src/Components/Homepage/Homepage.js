import React, { useState } from 'react';
import './home.css'; // Create this CSS file for custom styles
import Login from '../auth/Login';

const Homepage = () => { 
  const [showLogin, setShowLogin]=useState(false)
  return (
  <div className="homepage-container">
{
  showLogin? <Login/>:<div className="homepage-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Expense Tracker</h1>
        <div className="navbar-right">
          <button onClick={()=>setShowLogin(!showLogin)}   className="login-button">Login</button>
        </div>
      </nav>

      {/* Homepage Image */}
      <div className="image-container">
        <img src="/homepage.png" className="homepage-image" alt="Homepage"  />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
}
 
     </div>
  );
};

export default Homepage;
