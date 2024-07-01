# Módulo 2 de NodeJS Rocket-Seat

Esse módulo possui a estruturação de um projeto NodeJS conectado a um banco de dados SQLite para desenvolvimento e PostgreSQL para produção. Possui implementação de rotas e testes automatizados.

___
### Palavras chave:
>Fastify, Typescript, ESlint, SQLite, Knex, Migrations, .env, zod, Vitest, Render

### API disponível por 1 mês a partir de 27/05/2024:
>[Link do Render](https://ignite-nodejs-02-api-3jjk.onrender.com)

## Conteúdo Programático do Módulo 2:

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">1. Estrutura da aplicação</strong></summary>

  ---

  + Introdução
  + Conhecendo o Fastify
  + Entendendo o Typescript
  + Criando aplicação
  + Configurando ESLint

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">2. Banco de dados</strong></summary>

  ---

  + Estratégias de acesso ao banco
  + Configurando o Knex
  + Criando primeira migration
  + Criando tabela de transações
  + Realizando queries com Knex
  + Variáveis ambiente
  + Tratando env com Zod

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">3. Implementando as rotas</strong></summary>

  ---

  + Requisitos da aplicação
  + Plugins do Fastify
  + Criação de transações
  + Tipagem no Knex
  + Listagem das transações
  + Resumo de transações
  + Utilizando cookies no Fastify
  + Validando existência do cookie
  + Configurando um hook global

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">4. Testes automatizados</strong></summary>

  ---

  + Entendo testes automatizados
  + Criando primeiro teste
  + Testando criação de transação
  + Categorizando os testes
  + Testando listagem de transações
  + Configurando banco de testes
  + Finalizando testes da aplicação

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">5. Preparando app p/ deploy</strong></summary>

  ---

  + Preparando para deploy
  + Deploy do app no Render

  ---
</details>

## Acompanhamento do Projeto:

### Requisitos Funcionais:

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

### Regras de Negócio:

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;

### Requisitos Não Funcionais:

- [x] Nenhum requisito Não Funcional definido

## Atalhos do VSCode:

>Clique para visualizar os [Atalhos do VSCode](https://silicon-chips-f58.notion.site/VsCode-Shortcuts-Atalhos-4ced0388660c4f1c93b410765c0a44cd) no Notion.

## Principais comandos:

### Aula "Entendendo o Typescript"

+ `npm init -y` : cria o package.json para iniciar o projeto NodeJS.
+ `npm i -D typescript` : instala o typescript como dependência de desenvolvimento (cria a pasta node_modules).
+ `npx tsc --init`: executa o arquivo binário tsc dentro de ./node_modules/.bin/ para criar o arquivo tsconfig.json.
  > **_OBS:_**  Mudar "target" para "es2020" dentro do tsconfig.json.
+ `npx tsc src/index.ts` : converte o arquivo "src/index.ts" para um arquivo javascript.
+ `node src/index.js` : executa arquivo javascript com o node.

### Aula "Criando aplicação"

+ `npm i fastify` : instala o microframework fastify (semelhante ao express) para fazer requisições http.
+ `npm install -D @types/node` : instala o pacote types como dependência de desenvolvimento para evitar erros na conversão de .ts para .js (na utilização do comando npx).
+ `npm install tsx -D` : o tsx automatiza o processo de converter o .ts para .js e executar o node no arquivo criado.
+ `npx tsx src/server.ts` : exemplo de uso do tsx. Só é recomendado utilizá-lo em desenvolvimento, não em produção.
  > **_OBS:_**  Criar um script `"dev": "tsx watch src/server.ts"`. O watcher atualiza o terminal quando fazemos alterações no código.

### Aula "Configurando ESLint"

+ `npm i eslint -D` : Instala o ESLint.
+ `npm i eslint @rocketseat/eslint-config -D` : Instala as configurações da RocketSeat para o ESLint.
+ `npx eslint --init` : Permite configurar o ESLint para personalizar o projeto. 
+ `"lint": "eslint src -ext .ts` : 
com o comando `npm run lint` esse script corrige todos os arquivos .ts dentro da pasta "src".
  > **_OBS:_**  Necessita do arquivo .eslintrc.json para configuração do ESLint.

  > **_OBS2:_**  Necessita da extensão do VScode ESLint.
  
  > **_OBS3:_**  Necessário configurar o settings.json do VScode para utilizar o eslint adicionando o seguinte código.
  ```
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
  ```
  
### Aula "Configurando o Knex"

+ `npm install sqlite3` : instala o knex para o sqlite3 como dependência de produção.
  > **_OBS:_**  Knex é um query builder, ou seja, permite fazer queries no banco de dados utilizando uma sintaxe simplificada que pode ser convertida para atender á diferentes DBs. Pode ser instalado com `-D` para ser dependência de 

### Aula "Criando a Primeira Migration"
+ `npx knex -h` : comando de help que mostra vários comandos disponíveis no knex.

+ `"knex": "node --no-warnings --import tsx ./node_modules/.bin/knex"` : com o comando `npm run knex` esse script é rodado e permite usar o "tsx" com o knex (que não é algo convencional)
+ `npm run knex -- -h` : forma de passar o parâmetro "-h" para o knex e não para o npm ao usar o script anterior.
+ `npm run knex -- migrate:make create-documents` : cria a migrate create-documents relativa à ação de criar uma tabela de documentos.
  > **_OBS:_**  Necessita do arquivo knexfile.ts na pasta raiz do projeto importando as configurações do banco.

  > **_OBS2:_**  O nome da migrate simboliza uma ação no banco de dados.

### Aula "Criando tabela de Transações"

+ `npm run knex -- migrate:latest` : lê todas as migrations e as executa.
+ `npm run knex -- migrate:rollback` : volta a última migration executada na sua máquina.
  > **_OBS:_**  Só faz sentido caso ainda não tenha mandado a migration para o resto do time de desenvolvimento, pois, nesse caso, é necessário criar outra migration.

### Aula "Variável ambiente"

+ `npm i dotenv` : permite que o node entenda o arquivo .env na pasta raíz do projeto. Esse arquivo permite configurar diferentes ambientes: desenvolvimento, produção, teste, etc.
  > **_OBS:_**  Instalar extensão DotENV do VSCode.

### Aula "Tratando env com Zod"

+ `npm i zod` : biblioteca para validação de dados dentro do projeto. Auxilia na configuração do ".env".

### Aula "Utilizando cookies no Fastfy"

+ `npm i @fastify/cookie` : permite trabalhar com cookies dentro do fastify. Cookies permitem manter contexto entre as requisições.

### Aula "Criando primeiro teste"

+ `npm i vitest -D` : Vitest é um framework para escrita de testes automatizados.
  > **_OBS:1_**  Esse framework é semelhante em sintaxe ao Jest, mas utiliza por trás um motor de conversão de .ts para .js do tsx e, portanto, tem maior compatibilidade com esse projeto. Ele também é mais rápido e possui uma instalação mais fácil que o Jest.
  > **_OBS2:_**  Se tiver algum erro tente rodar `npm remove vitest` e instalar novamente.

+ `npx vitest` : Comando para rodar os testes criados.
  > **_OBS:_**  Nesse projeto foi criado um script `"test": "vitest"` para rodar esse comando como `npm run test`.

### Aula "Testando criação de transação"

+ `npm i supertest -D` : Ferramenta que permite fazer testes sem precisar rodar a aplicação inteira.
  > **_OBS:_**  Dessa forma não precisamos utilizar a porta em que a aplicação está e também não precisamos utilizar outra porta.

+ `npm i -D @types/supertest` : Biblioteca mantida pela comunidade que permite transformar declarações da supertest para typescript, para que as variáveis sejam entendidas dentro da nossa aplicação.

### Aula "Preparando para deploy"

+ `npm i tsup -D` : Ferramenta que utiliza o tsx por baixo dos panos para converter o .ts para .js para fazer o deploy da aplicação.
  > **_OBS:_**  Nesse projeto criamos o script `"build": "tsup src --out-dir build"` para rodar `npm run build`.

+ `node build/server.js` : Comando para testar a aplicação buildada em .js.

+ Conteúdo não mostrado em aula: instalação do git CLI (gh) para Fedora
  ```bash
  sudo dnf install 'dnf-command(config-manager)'

  sudo dnf config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo

  sudo dnf install gh
  ```

+ `gh auth login` : Autenticação no github.

+ `gh repo create` : Criação de repositório remoto.

+ `gh repo view -w` : Abre uma aba no navegador para visualizar o projeto dentro do github.

### Aula "Deploy do app no Render"
  > **_OBS:_**  Sugestões de plataformas para fazer o deploy do projeto: render.com, fly.io, railway.app.
+ `npm i pg` : Instala o postgress como dependência de produção, pois será o banco utilizado para o projeto.