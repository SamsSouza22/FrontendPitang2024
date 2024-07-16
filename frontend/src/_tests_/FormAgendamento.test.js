import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import ModalProvider from '../contexts/ModalProvider';

const renderWithProviders = (ui, providerProps = {}, renderOptions = {}) => {
    return render(
        <ChakraProvider>
            <ModalProvider {...providerProps}>{ui}</ModalProvider>
        </ChakraProvider>,
        renderOptions
    );

};
