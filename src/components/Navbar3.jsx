import React from "react";
import "./Navbar.css";
export function Navbar3() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="left">clever</span>
      </div>

      <div className="nav-center">
        <ul className="menu">
          <li>Home</li>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="nav-right icons">
        <input className="search" placeholder="Search" />
        <span>🔔</span>
        <img className="avatar" src="https://i.pravatar.cc/40" />
      </div>
    </nav>
  );
}


export default Navbar3;
