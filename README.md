<p align="center">
  <img src="https://github.com/HenriqueSouzza/microfrontend-vite/assets/52017795/02ed7ea9-b568-463e-b5bc-24e6236aec02">
</p>

# About project

É um projeto exemplificando uma implementação de microfrontend usando viteJs. Temos 2 aplicação uma remote e outra host:

```
Host - repo principal
Remote - pasta login-app
```

# Requirements

- Node 20
- Yarn

# Setup

Instale as dependências:

```bash
yarn install

cd login-app 
yarn install
```

Gere o build do login-app:

```bash
cd login-app 
yarn build
```

Execute a aplicação login-app no modo preview (simulação de produção):

```bash
yarn preview
```

Certifique-se se o link está funcionando:

```bash
http://localhost:4173
```

Execute a aplicação principal na raiz do projeto:

```bash
yarn dev
```

Certifique-se se os links estejam funcionando

```bash
http://localhost:5173
```

Ao acessar o link `http://localhost:5173` você vai perceber que aparentemente está sendo apresentado um aplicação, esse seria o comportamento do microfrontend em produção. Nossa aplicação `host` só renderiza os pequenos app que foram/serão implementados, uma vez implantado não será necessário realizar outro deploy pra produção.
