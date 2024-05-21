# Módulo 2 de NodeJS Rocket-Seat

Esse módulo possui a estruturação de um projeto NodeJS conectado a um banco de dados SQLite com implementação de rotas e testes automatizados.

___
### Palavras chave:
>Fastify, Typescript, ESlint, SQLite, Knex, Migrations, 

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

+ `"lint": "eslint src -ext .ts` : 
com o comando `npm run lint` esse script corrige todos os arquivos .ts dentro da pasta "src".
  > **_OBS:_**  Necessita do arquivo .eslintrc.json para configuração do ESLint.

  > **_OBS2:_**  Necessita da extensão do VScode ESLint.
  
  > **_OBS3:_**  Necessário configurar o settings.json do VScode para utilizar o eslint também.

### Aula "Configurando o Knex"

+ `npm install sqlite3` : instala o knex para o sqlite3 como dependência de produção.
  > **_OBS:_**  Knex é um query builder, ou seja, permite fazer queries no banco de dados utilizando uma sintaxe simplificada que pode ser convertida para atender á diferentes DBs.

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
