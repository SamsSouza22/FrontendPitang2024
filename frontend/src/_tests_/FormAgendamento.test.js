import { render, screen } from '@testing-library/react';
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

