import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Filmes from "../pages/Filmes";
import Magal from "../pages/Filmes/Magal"
import Teatro from "../pages/Teatro";
import Publicidade from "../pages/Publicidade";
import About from "../pages/About";

const RouteBuild = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/filmeseseries">
      <Route index element={<Filmes />} />
      <Route path='meu-sangue-ferve-por-voce' element={<Magal />} />
    </Route>
    <Route path="/teatro" element={<Teatro />} />
    <Route path="/publicidade" element={<Publicidade />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);

export default RouteBuild;
