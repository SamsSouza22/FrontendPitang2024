import { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Heading,
  Input,
  Box,
  SimpleGrid,
  Button,
  Text,
} from "@chakra-ui/react";
import CardAgendamento from "../components/CardAgendamento";
import fetcher from "../services/api";

const VisualizarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [pagAtual, setPagAtual] = useState(1);
  const [itensPorPag, setItensPorPag] = useState(6);
  const [novoItensPorPag, setNovoItensPorPag] = useState("");
  const [pesquisaTexto, setPesquisaTexto] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetcher.get("/api/agendamentos");
        setAgendamentos(data);
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    };
    fetchData();
  }, []);

  const handleProxPag = () => {
    setPagAtual((anterior) => anterior + 1);
  };

  const handlePagAnterior = () => {
    setPagAtual((anterior) => Math.max(anterior - 1, 1));
  };

  const handleMudarPag = (pag) => {
    setPagAtual(pag);
  };

  const handleMudarItensPorPag = () => {
    if (
      novoItensPorPag !== "" &&
      /^\d+$/.test(novoItensPorPag) &&
      novoItensPorPag !== "0"
    ) {
      setItensPorPag(Number(novoItensPorPag));
      setPagAtual(1);
    } else {
      // Trata caso em que o input não é válido
      alert("Digite apenas números maiores que zero no campo de itens");
    }
    setNovoItensPorPag(""); // Limpa o estado intermediário
  };

  const handlePesquisaTexto = (event) => {
    setPesquisaTexto(event.target.value); // Atualiza o estado do texto de pesquisa
  };

  const handleAtualizarStatus = async (id, novoStatus) => {
    try {
      await fetcher.patch(`/api/agendamentos/${id}`, { status: novoStatus });
      setAgendamentos((prevAgendamentos) =>
        prevAgendamentos.map((agendamento) =>
          agendamento.id === id
            ? { ...agendamento, status: novoStatus }
            : agendamento
        )
      );
    } catch (error) {
      alert("Erro ao atualizar o status no backend");
    }
  };

  const agendamentosFiltrados = agendamentos.filter((agendamento) =>
    agendamento.nome.toLowerCase().includes(pesquisaTexto.toLowerCase())
  );

  const inicio = (pagAtual - 1) * itensPorPag;
  const itensAtuais = agendamentosFiltrados.slice(inicio, inicio + itensPorPag);
  const totalPaginas = Math.ceil(agendamentosFiltrados.length / itensPorPag);

  return (
    <Container p={70} maxW="2x" centerContent bg = "#F9F7F3">
      <Flex as="header" width="100%" alignItems="center">
        <Heading size="lg" flex="1" textAlign="inherit" fontWeight={500}>
          Agendamentos
        </Heading>
        <Input
          placeholder="Pesquisar Agendamento"
          value={pesquisaTexto}
          onChange={handlePesquisaTexto}
          maxW="300px"
          p={4}
          boxShadow="md"
          _focus={{ borderColor: "blue.300" }}
        />
      </Flex>
      <Box p={5} width="100%" minHeight="500px">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={10}>
          {itensAtuais.map((agendamento) => (
            <CardAgendamento
              key={agendamento.id}
              {...agendamento}
              onAtualizarStatus={handleAtualizarStatus}
            />
          ))}
        </SimpleGrid>
        <Flex justifyContent="center" alignItems="center" mt={10} gap={5}>
          <Button
            onClick={handlePagAnterior}
            isDisabled={pagAtual === 1 || itensAtuais.length === 0}
            bg="#FFD6FF"
            color="black"
            _hover={{ bg: "#b0d0d3" }}
          >
            Página Anterior
          </Button>
          <Text>
            Página {agendamentosFiltrados.length === 0 ? 0 : pagAtual} de{" "}
            {totalPaginas === 0 ? 0 : totalPaginas}
          </Text>
          <Button
            onClick={handleProxPag}
            isDisabled={pagAtual === totalPaginas || itensAtuais.length === 0}
            bg="#FFD6FF"
            color="black"
            _hover={{ bg: "#b0d0d3" }}
          >
            Próxima Página
          </Button>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt={4}>
          {Array.from({ length: totalPaginas }, (_, index) => (
            <Button
              key={index}
              onClick={() => handleMudarPag(index + 1)}
              bg={index + 1 === pagAtual ? "#FFD6FF" : "#f7af9d"}
              color="black"
              _hover={{ bg: "#b0d0d3" }}
              mx={1}
            >
              {index + 1}
            </Button>
          ))}
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt={4} gap={3}>
          <Text>Itens por página:</Text>
          <Input
            placeholder="Itens"
            value={novoItensPorPag}
            onChange={(e) => setNovoItensPorPag(e.target.value)}
            maxW="100px"
            p={4}
            boxShadow="md"
            _focus={{ borderColor: "blue.300" }}
          />
          <Button onClick={handleMudarItensPorPag} bg="#FFD6FF">Confirmar</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default VisualizarAgendamentos;
