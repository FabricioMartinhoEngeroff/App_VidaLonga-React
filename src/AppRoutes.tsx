import { Routes, Route } from "react-router-dom";
import PaginaBase from "./paginas/PaginaBase/PaginaBase";
import Inicio from "./paginas/Inicio/Inicio";
import Favoritos from "./paginas/Favoritos/Favorito";
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaBase />}>
        <Route index element={<Inicio />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;