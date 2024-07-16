import { render, screen, fireEvent } from '@testing-library/react';
import CustomDatePicker from '../components/CustomDatePicker';
import { ChakraProvider } from '@chakra-ui/react';

test('renderiza o componente CustomDatePicker', () => {
    const handleChange = jest.fn();
    render(
        <ChakraProvider>
            <CustomDatePicker selected={null} onChange={handleChange} />
        </ChakraProvider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('chama a função onChange quando uma data é selecionada', () => {
    const handleChange = jest.fn();
    render(
        <ChakraProvider>
            <CustomDatePicker selected={null} onChange={handleChange} />
        </ChakraProvider>
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '2024-07-20' } });

    expect(handleChange).toHaveBeenCalled();
});