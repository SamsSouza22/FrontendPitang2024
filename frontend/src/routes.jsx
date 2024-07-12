import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agendamento from "./pages/CadastroAgendamento";

const AppRoutes = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Agendamento />} path="/agendar" />
      </Routes>
    </BrowserRouter>
  </>
);

export default AppRoutes;
