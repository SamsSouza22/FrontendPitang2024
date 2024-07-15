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
        message: "Horário de agendamento deve estar entre 07:00 e 16:00",
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
    // Removendo a parte do horário
    const formattedNascData = data.nascData
      ? data.nascData.toISOString().split("T")[0]
      : null;
    const agendamentoData = {
      ...data,
      nascData: formattedNascData,
      status: "Pendente",
    };

    try {
      const response = await fetch("http://localhost:3000/agendamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agendamentoData),
      });

      if (response.ok) {
        openModal("Agendamento salvo com sucesso!");
      } else {
        openModal("Erro ao salvar o agendamento: " + response.statusText);
      }
    } catch (error) {
      openModal("Erro ao fazer a requisição");
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
            render={({ field }) => <Input {...field} />}
          />
          {errors.nome && <Text color="red.500">{errors.nome.message}</Text>}
        </FormControl>
        <FormControl id="Data de Nascimento" isInvalid={errors.nascData}>
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
        <FormControl id="Data de Agendamento" isInvalid={errors.agendData}>
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
        <Button type="submit" width="120px" alignSelf="center" bg="#f7e3af">
          Agendar
        </Button>
      </Stack>
    </Box>
  );
};

export default FormAgendamento;
