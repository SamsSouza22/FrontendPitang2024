import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";

const FormAgendamento = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} width="330px">
      <Stack spacing="6">
        <FormControl id="Nome">
          <FormLabel>Nome</FormLabel>
          <Controller
            name="nome"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl id="Data de Nascimento">
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
        </FormControl>
        <FormControl id="Data de Agendamento">
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
        </FormControl>
        <Button type="submit" width="120px" alignSelf="center" bg="#f7e3af">
          Agendar
        </Button>
      </Stack>
    </Box>
  );
};

export default FormAgendamento;
