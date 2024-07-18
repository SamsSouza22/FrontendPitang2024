import { render, screen, waitFor } from "@testing-library/react";
import VisualizarAgendamentos from "../pages/VisualizarAgendamentos";
import fetcher from "../services/api";

// Mock do fetcher
jest.mock("../services/api");

const mockAgendamentos = [
  { id: "1", nome: "João Silva", nascData: "1990-01-01T00:00:00Z", agendData: "2023-07-20T15:30:00Z", status: "Pendente" },
  { id: "2", nome: "Maria Oliveira", nascData: "1985-05-15T00:00:00Z", agendData: "2023-07-21T14:00:00Z", status: "Pendente" },
];

test("deve renderizar o componente e buscar agendamentos", async () => {
    fetcher.get.mockResolvedValueOnce(mockAgendamentos);
    
    render(<VisualizarAgendamentos />);
    
    await waitFor(() => {
      expect(screen.getByText("João Silva")).toBeInTheDocument();
      expect(screen.getByText("Maria Oliveira")).toBeInTheDocument();
    });
  });