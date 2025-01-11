import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Trending Coins</h3>
      <ul>
        <li>Ethereum (ETH)</li>
        <li>Dogecoin (DOGE)</li>
        <li>Cardano (ADA)</li>
      </ul>
    </aside>
  );
}

export default Sidebar;