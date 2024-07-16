import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import ModalProvider from '../contexts/ModalProvider';
import FormAgendamento from '../components/FormAgendamento';

const renderWithProviders = (ui, providerProps = {}, renderOptions = {}) => {
    return render(
        <ChakraProvider>
            <ModalProvider {...providerProps}>{ui}</ModalProvider>
        </ChakraProvider>,
        renderOptions
    );
};

test('renderiza o componente FormAgendamento', () => {
    renderWithProviders(<FormAgendamento />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Nascimento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Agendamento/i)).toBeInTheDocument();
});

test('valida os campos do formulário e exibe mensagens de erro', async () => {
    renderWithProviders(<FormAgendamento />);
    fireEvent.submit(screen.getByRole('button', { name: /Agendar/i }));
    expect(await screen.findByText(/Informe seu nome/i)).toBeInTheDocument();
    expect(await screen.findByText(/Informe a data de nascimento/i)).toBeInTheDocument();
    expect(await screen.findByText(/Informe a data de agendamento/i)).toBeInTheDocument();
});

