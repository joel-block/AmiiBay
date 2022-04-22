import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import "../style/App.css";
import { AllProducts } from "./products";
import { AddAdmin } from "./admin";

import SingleProductCard from "./products/SingleProductCard";
import { Login, Register } from "./";
import { NavBar } from "./navbar";
import { Checkout } from "./checkout";



const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  return (
    <div className="app-container">
      <h1>Hello, World!</h1>
      <NavBar />
      <p>API Status: {APIHealth}</p>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/singleProduct" element={<SingleProductCard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AddAdmin />} />
      </Routes>
    </div>
  );
};

export default App;
