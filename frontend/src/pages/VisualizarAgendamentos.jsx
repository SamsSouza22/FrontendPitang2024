import { Container, Flex, Heading, Input, Box } from "@chakra-ui/react";

const VisualizarAgendamentos = () => {
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
          _focus={{borderColor: "blue.300"}}
        />
      </Flex>
      <Box p={5} width="100%" minHeight="500px">
        </Box>
    </Container>
  );
};

export default VisualizarAgendamentos;
