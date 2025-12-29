import React from "react";
import "./Navbar.css";

export function Navbar5() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="left">clever</span>
      </div>

      <div className="nav-center">
        <input className="search wide" placeholder="Search" />
      </div>

      <div className="nav-right icons">
        <span>🔔</span>
        <img className="avatar" src="https://i.pravatar.cc/40" />
      </div>
    </nav>
  );
}

export default Navbar5;
