import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar1() {
  return (
    <nav className="nav">
      <div className="left">Papagou Boutique.</div>

      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li><Link to="/About">About</Link></li>
      </ul>

      <div className="right icons">
        <span>🔍</span>
        <span>🔔</span>
        <img className="avatar" src="https://i.pravatar.cc/40" />
      </div>
    </nav>
  );
}

export default Navbar1;
