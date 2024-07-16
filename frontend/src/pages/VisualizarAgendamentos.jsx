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

const VisualizarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [pagAtual, setPagAtual] = useState(1);
  const [itensPorPag, setItensPorPag] = useState(6);
  const [novoItensPorPag, setNovoItensPorPag] = useState("");
  const [pesquisaTexto, setPesquisaTexto] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:3000/agendamentos")
      .then((response) => response.json())
      .then((data) => {
        setAgendamentos(data);
      });
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
    if (novoItensPorPag !== "" && /^\d+$/.test(novoItensPorPag) && novoItensPorPag !== "0") {
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
  
  const handleAtualizarStatus = (id, novoStatus) => {
    fetch(`http://localhost:3000/agendamentos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: novoStatus }),
    })
      .then((response) => {
        if (response.ok) {
          setAgendamentos((prevAgendamentos) =>
            prevAgendamentos.map((agendamento) =>
              agendamento.id === id ? { ...agendamento, status: novoStatus } : agendamento
            )
          );
        } else {
          alert("Erro ao atualizar o status no backend");
        }
      })
      .catch(() => {
        alert("Erro ao atualizar o status no backend");
      });
  };

  const agendamentosFiltrados = agendamentos.filter((agendamento) =>
    agendamento.nome.toLowerCase().includes(pesquisaTexto.toLowerCase())
  );

  const inicio = (pagAtual - 1) * itensPorPag;
  const itensAtuais = agendamentosFiltrados.slice(inicio, inicio + itensPorPag);
  const totalPaginas = Math.ceil(agendamentosFiltrados.length / itensPorPag);

  return (
    <Container p={70} maxW="2x" centerContent>
      <Flex as="header" width="100%" alignItems="center" p={4}>
        <Heading size="lg" flex="1" textAlign="inherit">
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
            isDisabled={pagAtual === 1}
            bg="#f7af9d"
            color="black"
            _hover={{ bg: "#b0d0d3" }}
          >
            Página Anterior
          </Button>
          <Text>
            Página {pagAtual} de {totalPaginas}
          </Text>
          <Button
            onClick={handleProxPag}
            isDisabled={pagAtual === totalPaginas}
            bg="#f7af9d"
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
              bg={index + 1 === pagAtual ? "#b0d0d3" : "#f7af9d"}
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
          <Button onClick={handleMudarItensPorPag}>Confirmar</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default VisualizarAgendamentos;