import { Stack, Flex, Heading, Box } from "@chakra-ui/react";
import FormAgendamento from "../components/FormAgendamento";

const CadastroAgendamento = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Preencha os campos abaixo</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <FormAgendamento />
        </Box>
      </Stack>
    </Flex>
  );
};

export default CadastroAgendamento;

