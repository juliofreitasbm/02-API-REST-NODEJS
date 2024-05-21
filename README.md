# Módulo 2 de NodeJS Rocket-Seat

Esse módulo possui a estruturação de um projeto NodeJS conectado a um banco de dados SQLite com implementação de rotas e testes automatizados.

___
### Palavras chave:
>Fastify, Typescript, ESlint, SQLite, Knex

## Principais comandos:

### Aula "Entendendo o Typescript"

+ `npm init -y` : cria o package.json para iniciar o projeto NodeJS.
+ `npm i -D typescript` : instala o typescript como dependência de desenvolvimento (cria a pasta node_modules).
+ `npx tsc --init`: executa o arquivo binário tsc dentro de ./node_modules/.bin/ para criar o arquivo tsconfig.json.
  > **_OBS:_**  Mudar "target" para "es2020".
+ `npx tsc src/index.ts` : converte o arquivo "src/index.ts" para um arquivo javascript.
+ `node src/index.js` : executa arquivo javascript com o node.

### Aula "Criando aplicação"

+ `npm i fastify` : instala o microframework fastify (semelhante ao express) para fazer requisições http.
+ `npm install -D @types/node` : instala o pacote types como dependência de desenvolvimento para evitar erros na conversão de .ts para .js (na utilização do comando npx).
+ `npm install tsx -D` : o tsx automatiza o processo de converter o .ts para .js e executar o node no arquivo criado.
+ `npx tsx src/server.ts` : exemplo de uso do tsx. Só é recomendado utilizá-lo em desenvolvimento, não em produção.
  > **_OBS:_**  Criar um script `"dev": "tsx watch src/server.ts"`. O watcher atualiza o terminal quando fazemos alterações no código.

### Aula "Configurando ESLint"