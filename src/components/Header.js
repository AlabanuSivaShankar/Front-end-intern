import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Crypto Dashboard</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Market</a>
        <a href="#">Portfolio</a>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;
