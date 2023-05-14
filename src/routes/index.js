import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";

const RouteBuild = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contato" element={<Contact />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);

export default RouteBuild;
