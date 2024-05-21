import { knex as setupKnext } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
}

export const knex = setupKnext(config)
