import React, { useState } from "react";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import About from "./components/About";
import Products from "./components/Products";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </>
  );
}

export default App;
