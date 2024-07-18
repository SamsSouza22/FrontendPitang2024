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

const CardAgendamento = ({
  id,
  nome,
  nascData,
  agendData,
  status,
  onAtualizarStatus,
}) => {
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

  const handleAtualizarStatus = () => {
    onAtualizarStatus(id, "Realizado");
  };

  return (
    <Card
      width="350px"
      shadow="md"
      borderColor="#E7C6FF"
      borderWidth="8px"
      borderRadius="md"
    >
      <CardHeader>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize="large" maxW="180px" fontWeight={500}>
            {nome}
          </Heading>
          <Button
            onClick={handleAtualizarStatus}
            isDisabled={status === "Realizado"}
            alignItems="center"
            bg="#FFD6FF"
            color="black"
            _hover={{ bg: "#b0d0d3" }}
          >
            {status === "Realizado" ? "Concluído" : "Confirmar atendimento"}
          </Button>
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
  onAtualizarStatus: PropTypes.func.isRequired,
};

export default CardAgendamento;
