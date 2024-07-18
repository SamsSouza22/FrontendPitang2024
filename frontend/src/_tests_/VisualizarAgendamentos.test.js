import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

test("deve filtrar agendamentos ao pesquisar", async () => {
    fetcher.get.mockResolvedValueOnce(mockAgendamentos);
    
    render(<VisualizarAgendamentos />);
    
    await waitFor(() => {
      expect(screen.getByText("João Silva")).toBeInTheDocument();
      expect(screen.getByText("Maria Oliveira")).toBeInTheDocument();
    });
    
    const searchInput = screen.getByPlaceholderText("Pesquisar Agendamento");
    fireEvent.change(searchInput, { target: { value: "João" } });
    
    expect(screen.getByText("João Silva")).toBeInTheDocument();
    expect(screen.queryByText("Maria Oliveira")).not.toBeInTheDocument();
});

test("deve desabilitar botões de paginação corretamente", async () => {
    fetcher.get.mockResolvedValueOnce(mockAgendamentos);
    
    render(<VisualizarAgendamentos />);
    
    await waitFor(() => {
      expect(screen.getByText("Página 0 de 0")).toBeInTheDocument();
    });
    
    const nextButton = screen.getByText("Próxima Página");
    const prevButton = screen.getByText("Página Anterior");
    
    expect(nextButton).toBeDisabled();
    expect(prevButton).toBeDisabled();
  });