import { Flex, Heading, Spacer, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      p="20px"
      alignItems="center"
      bg="#C8B6FF"
      boxShadow="md"
      top="0"
      width="100%"
      zIndex="1000"
      position="sticky"
    >
      <HStack spacing="30px">
        <Heading as="h2" size="md" color="black">
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none", color: "gray.600" }}
            fontWeight={500}
            transition="color 0.2s"
          >
            Cadastrar Agendamento
          </Link>
        </Heading>
        <Heading as="h2" size="md" color="black">
          <Link
            as={RouterLink}
            to="/agendamentos"
            _hover={{ textDecoration: "none", color: "gray.600" }}
            fontWeight={500}
            transition="color 0.2s"
          >
            Visualizar Agendamentos
          </Link>
        </Heading>
      </HStack>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
