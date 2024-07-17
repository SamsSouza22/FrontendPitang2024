import { Stack, Flex, Heading, Box } from "@chakra-ui/react";
import FormAgendamento from "../components/FormAgendamento";
import ModalProvider from "../contexts/ModalProvider";

const CadastroAgendamento = () => {
  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Realizar Agendamento</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} bg="blue.100">
          <ModalProvider>
            <FormAgendamento />
          </ModalProvider>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CadastroAgendamento;
