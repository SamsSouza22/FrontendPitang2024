import { render, screen, fireEvent } from "@testing-library/react";
import CardAgendamento from "../components/CardAgendamento";

const mockAgendamento = {
  id: "1",
  nome: "João Silva",
  nascData: "1990-01-01T00:00:00Z",
  agendData: "2023-07-20T15:00:00Z",
  status: "Pendente",
  onAtualizarStatus: jest.fn(),
};

test("deve renderizar o componente com os dados corretos", () => {
  render(<CardAgendamento {...mockAgendamento} />);

  expect(screen.getByText("João Silva")).toBeInTheDocument();
  expect(screen.getByText("Data de Nascimento: 01/01/1990")).toBeInTheDocument();
  expect(screen.getByText("Data de Agendamento: 20/07/2023 15:00")).toBeInTheDocument();
  expect(screen.getByText("Status: Pendente")).toBeInTheDocument();
});

test("deve chamar onAtualizarStatus quando o botão 'Concluir' for clicado", () => {
  render(<CardAgendamento {...mockAgendamento} />);

  const buttonConcluir = screen.getByLabelText("Concluir");
  fireEvent.click(buttonConcluir);

  expect(mockAgendamento.onAtualizarStatus).toHaveBeenCalledWith("1", "Realizado");
});

test("deve chamar onAtualizarStatus quando o botão 'Cancelar' for clicado", () => {
  render(<CardAgendamento {...mockAgendamento} />);

  const buttonCancelar = screen.getByLabelText("Cancelar");
  fireEvent.click(buttonCancelar);

  expect(mockAgendamento.onAtualizarStatus).toHaveBeenCalledWith("1", "Não Realizado");
});

test("deve desabilitar os botões se o status for 'Realizado'", () => {
  render(<CardAgendamento {...mockAgendamento} status="Realizado" />);

  const buttonConcluir = screen.getByLabelText("Concluir");
  const buttonCancelar = screen.getByLabelText("Cancelar");

  expect(buttonConcluir).toBeDisabled();
  expect(buttonCancelar).toBeDisabled();
});
