import {
    Flex,
    Heading,
    Spacer,
    HStack,
    Link,
  } from "@chakra-ui/react";
  import { Link as RouterLink } from "react-router-dom";

  const NavBar = () => {
  
    return (
      <Flex
        as="nav"
        p="20px"
        alignItems="center"
        bg="#f7af9d"
        top="0"
        width="100%"
        zIndex="1000"
      >
        <HStack spacing="20px">
          <Heading as="h2" size="md">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              Cadastrar Agendamento
            </Link>
          </Heading>
          <Heading as="h2" size="md">
            <Link as={RouterLink} to="/agendamentos" _hover={{ textDecoration: "none" }}>
              Visualizar Agendamentos
            </Link>
          </Heading>
        </HStack>
        <Spacer />
      </Flex>
    );
  };
  
  export default NavBar;
  