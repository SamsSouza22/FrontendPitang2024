import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Agendamento from "./pages/CadastroAgendamento";
import VisuAgendamentos from "./pages/VisualizarAgendamentos";
import NavBar from "./components/NavBar";

const AppRoutes = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <NavBar />

              <Outlet />
            </>
          }
        >
          <Route element={<Agendamento />} path="/" />
          <Route element={<VisuAgendamentos />} path="/agendamentos" />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default AppRoutes;
