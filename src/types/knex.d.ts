// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    tansactions: {
      id: string
      title: string
      amoung: number
      created_at: string
      session_id?: string
    }
  }
}
