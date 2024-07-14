import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agendamento from "./pages/CadastroAgendamento";
import VisuAgendamentos from "./pages/VisualizarAgendamentos"

const AppRoutes = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Agendamento />} path="/agendar" />
        <Route element={<VisuAgendamentos />} path="/agendamentos" />
      </Routes>
    </BrowserRouter>
  </>
);

export default AppRoutes;
