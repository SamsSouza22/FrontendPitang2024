import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";

const formSchema = z.object({
  nome: z.string().min(1, { message: "Informe seu nome" }),
  nascData: z.date().nullable().refine((date) => date && date <= new Date(), {
    message: "Informe a data de nascimento",
  }),
  agendData: z.date().nullable().refine((date) => date && date >= new Date(), {
    message: "Informe a data de agendamento",
  }),
});

const FormAgendamento = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
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
              <DatePicker
                selected={field.value}
                onChange={(data) => field.onChange(data)}
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
                customInput={<Input />}
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
              <DatePicker
                selected={field.value}
                onChange={(data) => field.onChange(data)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy HH:mm"
                showTimeSelect
                showTimeSelectOnly={false}
                timeFormat="HH:mm"
                timeIntervals={60}
                customInput={<Input />}
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
