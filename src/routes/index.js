import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Portfolio from "../pages/Portfolio";

const RouteBuild = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/Portfolio" element={<Portfolio />} />
  </Routes>
);

export default RouteBuild;
