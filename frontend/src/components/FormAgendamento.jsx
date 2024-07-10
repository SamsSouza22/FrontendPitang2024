import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl, FormLabel, Input, Stack, Box } from "@chakra-ui/react";

const FormAgendamento = () => {
  const [nome, setNome] = useState("");
  const [nascData, setNascData] = useState(null);
  const [agendData, setAgendData] = useState(null);

  const handleNascData = (data) => {
    setNascData(data);
  };
  const handleAgendData = (data) => {
    setAgendData(data);
  };

  return (
    <Stack spacing="8">
      <FormControl id="Nome">
        <FormLabel>Nome</FormLabel>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </FormControl>
      <FormControl id="Data de Nascimento">
        <FormLabel>Data de Nascimento</FormLabel>
        <Box>
          <DatePicker
            selected={nascData}
            onChange={handleNascData}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            customInput={<Input />}
            required
          />
        </Box>
      </FormControl>
      <FormControl id="Data de Agendamento">
        <FormLabel>Data de Agendamento</FormLabel>
        <Box>
          <DatePicker
            selected={agendData}
            onChange={handleAgendData}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            customInput={<Input />}
            required
          />
        </Box>
      </FormControl>
    </Stack>
  );
};

export default FormAgendamento;
