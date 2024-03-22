import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Filmes from "../pages/Filmes";
import About from "../pages/About";

const RouteBuild = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/filmes" element={<Filmes />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);

export default RouteBuild;
