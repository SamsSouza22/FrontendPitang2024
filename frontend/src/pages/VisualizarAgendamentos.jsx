import { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Heading,
  Input,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import CardAgendamento from "../components/CardAgendamento";

const VisualizarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/agendamentos")
      .then((response) => response.json())
      .then((data) => {
        setAgendamentos(data);
      });
  }, []);

  return (
    <Container p={70} maxW="2x" centerContent>
      <Flex as="header" width="100%" alignItems="center" p={4}>
        <Heading size="lg" flex="1" textAlign="inherit">
          Agendamentos
        </Heading>
        <Input
          placeholder="Pesquisar Agendamento"
          maxW="300px"
          p={4}
          boxShadow="md"
          _focus={{ borderColor: "blue.300" }}
        />
      </Flex>
      <Box p={5} width="100%" minHeight="500px">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={10}>
          {agendamentos.map((agendamento) => (
            <CardAgendamento key={agendamento.id} {...agendamento} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default VisualizarAgendamentos;
