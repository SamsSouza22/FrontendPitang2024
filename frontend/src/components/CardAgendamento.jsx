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

const CardAgendamento = ({ nome, nascData, agendData, status }) => {
  const formatarData = (data, manterHora = false) => {
    const [dataNova, hora] = data.split("T");
    const novaData = dataNova.split("-");
    if (manterHora) {
      return `${novaData[2]}/${novaData[1]}/${novaData[0]} ${hora.substring(0,5)}`;
    }

    return `${novaData[2]}/${novaData[1]}/${novaData[0]}`;
  };

  const dataNascFormat = formatarData(nascData);
  const dataAgendFormat = formatarData(agendData, true);
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
        <Text>Data de Nascimento: {dataNascFormat}</Text>
        <Text>Data de Agendamento: {dataAgendFormat}</Text>
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
  id: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  nascData: PropTypes.string.isRequired,
  agendData: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CardAgendamento;
