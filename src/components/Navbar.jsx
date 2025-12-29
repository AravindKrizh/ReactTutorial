import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
   <nav className="nav">
<div className="left">clever</div>
<ul className="menu">
<li>Home</li>
<li>Product</li>
<li>Features</li>
<li>Pricing</li>
</ul>
<div className="right">
<span className="link">Sign in</span>
<button className="btn">Register</button>
</div>
</nav>
  );
}

export default Navbar;
