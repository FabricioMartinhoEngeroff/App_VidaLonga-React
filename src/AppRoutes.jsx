import { Routes, Route } from "react-router-dom";
import PaginaBase from "./paginas/PaginaBase";
import Inicio from "./paginas/Inicio";
import Favoritos from "./paginas/Favoritos";
import NaoEncontrada from "./paginas/NaoEncontrada";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PaginaBase />}>
      <Route index element={<Inicio />} />
      <Route path="favoritos" element={<Favoritos />} />
    </Route>
    <Route path="*" element={<NaoEncontrada />} />
  </Routes>
);

export default AppRoutes;
