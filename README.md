# Portal de vacina
Um sistema de agendamento que permite a visualização e o cadastro de agendamentos de vacinação.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Licença](#licença)

## Funcionalidades

- Cadastro de agendamentos.
- Visualização de agendamentos.
- Atualização do status dos agendamentos.
- Pesquisa por nome do agendado.

## Tecnologias Utilizadas

* [React](https://react.dev/)
* [Chakra UI](https://v2.chakra-ui.com/)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Jest](https://jestjs.io/pt-BR/)
* [Vite](https://vitejs.dev/)

## Instalação

1. Clone o repositório
```
git clone https://github.com/SamsSouza22/FrontendPitang2024.git
cd frontend
```

2. Instale as dependências
npm install

3. Inicie o servidor
    1. Para iniciar em um ambiente de desenvolvimento:
        ```
        npm run dev
        ```
    2. Para iniciar em um ambiente de produção:
       ```
        npm run preview
       ```

## Estrutura do Projeto
```
frontend/
├── src/
│   ├── _tests_/
│   │   ├── CardAgendamento.test.js
│   │   ├── CustomDatePicker.test.js
│   │   ├── FormAgendamento.test.js
│   │   └── VisualizarAgendamentos.test.js
│   ├── components/
│   │   ├── CardAgendamento.jsx
│   │   ├── CustomDatePicker.jsx
│   │   ├── CustomModal.jsx
│   │   ├── FormAgendamento.jsx
│   │   └── NavBar.jsx
│   ├── contexts/
│   │   ├── ModalContext.jsx
│   │   └── ModalProvider.jsx
│   ├── hooks/
│   │   └── useModal.js
│   ├── pages/
│   │   ├── CadastroAgendamento.jsx
│   │   └── VisualizarAgendamentos.jsx
│   ├── services/
│   │   └── api.js
│   │
│   ├── main.mjs
│   │
│   └── index.mjs
├── .gitignore
├── package-lock.json
└── package.json
...
```

## Testes
Para realizar os testes, use o comando abaixo:
```
npm run test
```

### Licença
Feito por Samara Simplicio de Souza 😊
