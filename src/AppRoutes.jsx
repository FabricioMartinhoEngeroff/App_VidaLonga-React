import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Favoritos from "./paginas/Favoritos";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Inicio />} />
    <Route path="/favoritos" element={<Favoritos />} />
  </Routes>
);

export default AppRoutes;
