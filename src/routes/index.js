import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Filmes from "../pages/Filmes";
import AliceSo from "../pages/Filmes/AliceSo"
import DoresAmores from "../pages/Filmes/DoresAmores"
import Fogareu from "../pages/Filmes/Fogareu"
import Magal from "../pages/Filmes/Magal"
import MemoriaEstudantil from "../pages/Filmes/MemoriaEstudantil"
import OswaldoCruz from "../pages/Filmes/OswaldoCruz"
import Perdido from "../pages/Filmes/Perdido"
import RioDesejo from "../pages/Filmes/RioDesejo"
import RioDuvida from "../pages/Filmes/RioDuvida"
import SambandoBrasas from "../pages/Filmes/SambandoBrasas"
import Santo from "../pages/Filmes/Santo"
import SemSeuSangue from "../pages/Filmes/SemSeuSangue"
import Teatro from "../pages/Teatro";
import Publicidade from "../pages/Publicidade";
import About from "../pages/About";

const RouteBuild = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/filmeseseries">
      <Route index element={<Filmes />} />
      <Route path='alice-e-so' element={<AliceSo />} />
      <Route path='dores-de-amores' element={<DoresAmores />} />
      <Route path='fogareu' element={<Fogareu />} />
      <Route path='meu-sangue-ferve-por-voce' element={<Magal />} />
      <Route path='memoria-do-movimento-estudantil' element={<MemoriaEstudantil />} />
      <Route path='oswaldo-cruz' element={<OswaldoCruz />} />
      <Route path='perdido' element={<Perdido />} />
      <Route path='rio-do-desejo' element={<RioDesejo />} />
      <Route path='rio-da-duvida' element={<RioDuvida />} />
      <Route path='sambando-nas-brasas-moro' element={<SambandoBrasas />} />
      <Route path='santo' element={<Santo />} />
      <Route path='sem-seu-sangue' element={<SemSeuSangue />} />
    </Route>
    <Route path="/teatro" element={<Teatro />} />
    <Route path="/publicidade" element={<Publicidade />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);

export default RouteBuild;
