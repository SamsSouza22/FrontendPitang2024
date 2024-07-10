import {
    FormControl,
    FormLabel,
    Input,
    Stack,
  } from '@chakra-ui/react'

const FormAgendamento = () =>{

    return(
        <Stack spacing="8">
            <FormControl id="Nome">
              <FormLabel>Nome</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="Data de Nascimento">
              <FormLabel>Data de Nascimento</FormLabel>
              <Input type="date" />
            </FormControl>
          </Stack>
    )
}

export default FormAgendamento;