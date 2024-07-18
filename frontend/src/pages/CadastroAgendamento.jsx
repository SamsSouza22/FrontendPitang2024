import { Stack, Flex, Heading, Box } from "@chakra-ui/react";
import FormAgendamento from "../components/FormAgendamento";
import ModalProvider from "../contexts/ModalProvider";

const CadastroAgendamento = () => {
  return (
    <Flex minH={"85vh"} align={"center"} justify={"center"} bg = "#F9F7F3">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"} fontWeight={500}>Realizar Agendamento</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} bg="#FFD6FF">
          <ModalProvider>
            <FormAgendamento />
          </ModalProvider>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CadastroAgendamento;
