import React from "react";
import "./Navbar.css";
export function Navbar1() {
return (
<nav className="nav">
<div className="left">clever</div>
<ul className="menu">
<li>Home</li>
<li>Product</li>
<li>Features</li>
<li>Pricing</li>
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
