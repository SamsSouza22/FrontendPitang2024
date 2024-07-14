import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const CardAgendamento = ({ nome, dataNasc, dataAgend, status }) => {
  return (
    <Card
      width="350px"
      shadow="md"
      borderColor="#f7af9d"
      borderWidth="8px"
      borderRadius="md"
    >
      <CardHeader>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize="xl" maxW="180px">
            {nome}
          </Heading>
          <Button
            alignItems="center"
            bg="#f7af9d"
            color="black"
            _hover={{ bg: "#b0d0d3" }}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>Data de Nascimento: {dataNasc}</Text>
        <Text>Data de Agendamento: {dataAgend}</Text>
      </CardBody>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>Status: {status}</Text>
      </CardFooter>
    </Card>
  );
};

CardAgendamento.propTypes = {
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    dataNasc: PropTypes.instanceOf(Date).isRequired,
    dataAgend: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
};

export default CardAgendamento;
