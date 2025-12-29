import React from "react";
import "./Navbar.css";

export function Navbar2() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="left">clever</span>
      </div>

      <div className="nav-center">
        <input className="search wide" placeholder="Search" />
      </div>

      <div className="nav-right">
        <ul className="menu">
          <li>Home</li>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
        <span>🔔</span>
        <img className="avatar" src="https://i.pravatar.cc/40" />
      </div>
    </nav>
  );
}


export default Navbar2;
