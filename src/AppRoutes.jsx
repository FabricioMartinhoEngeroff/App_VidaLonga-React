import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Favoritos from "./paginas/Favoritos";
import NaoEncontrada from "./paginas/NaoEncontrada";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Inicio />} />
    <Route path="/favoritos" element={<Favoritos />} />
    <Route path="*" element={<NaoEncontrada />} />
  </Routes>
);

export default AppRoutes;
