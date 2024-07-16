import { render, screen } from '@testing-library/react';
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
