import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";

import CustomDatePicker from "./CustomDatePicker";
import useModal from "../hooks/useModal";
import fetcher from "../services/api";

const formSchema = z.object({
  nome: z.string().min(1, { message: "Informe seu nome" }),
  nascData: z
    .date()
    .nullable()
    .refine((date) => date && date <= new Date(), {
      message: "Informe a data de nascimento",
    }),
  agendData: z
    .date()
    .nullable()
    .refine(
      (date) => {
        return date !== null && date !== undefined;
      },
      {
        message: "Informe a data de agendamento",
      }
    )
    .refine(
      (date) => {
        return (
          date &&
          date >= new Date() &&
          date.getHours() >= 7 &&
          date.getHours() <= 16
        );
      },
      {
        message:
          "Horário de agendamento deve estar entre 07:00 e 16:00 do dia escolhido",
      }
    ),
});

const FormAgendamento = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { openModal } = useModal();

  const onSubmit = async (data) => {
    const agendamentoData = {
      ...data,
      status: "Pendente",
    };

    try {
      await fetcher.post("/api/agendamentos", agendamentoData);
      openModal("Agendamento salvo com sucesso!");
    } catch (error) {
      openModal("Esse horário já está ocupado");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} width="330px">
      <Stack spacing="6">
        <FormControl id="Nome" isInvalid={errors.nome}>
          <FormLabel>Nome</FormLabel>
          <Controller
            name="nome"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                bg = "#FFD6FF"
                focusBorderColor="teal.500"
                errorBorderColor="red.500"
                borderColor="black"
              />
            )}
          />
          {errors.nome && <Text color="red.500">{errors.nome.message}</Text>}
        </FormControl>
        <FormControl
          id="Data de Nascimento"
          isInvalid={errors.nascData}
          border="black"
        >
          <FormLabel>Data de Nascimento</FormLabel>
          <Controller
            name="nascData"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <CustomDatePicker
                selected={field.value}
                onChange={(data) => field.onChange(data)}
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          {errors.nascData && (
            <Text color="red.500">{errors.nascData.message}</Text>
          )}
        </FormControl>
        <FormControl
          id="Data de Agendamento"
          isInvalid={errors.agendData}
          border="black"
        >
          <FormLabel>Data de Agendamento</FormLabel>
          <Controller
            name="agendData"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <CustomDatePicker
                selected={field.value}
                onChange={(data) => field.onChange(data)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy HH:mm"
                showTimeSelect
                minTime={new Date(0, 0, 0, 7, 0)}
                maxTime={new Date(0, 0, 0, 16, 0)}
              />
            )}
          />
          {errors.agendData && (
            <Text color="red.500">{errors.agendData.message}</Text>
          )}
        </FormControl>
        <Button
          type="submit"
          width="120px"
          alignSelf="center"
          bg="#f7e3af"
          borderColor="black"
          borderWidth="1px"
          borderRadius="md"
          _hover={{ bg: "#b0d0d3", borderColor: "#C8B6FF" }}
        >
          Agendar
        </Button>
      </Stack>
    </Box>
  );
};

export default FormAgendamento;
