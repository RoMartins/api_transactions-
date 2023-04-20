import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Console running on por http://localhost:3333')
  })

app.get('/hello', async () => {
  const tables = knex('sqlite_schema').select('*')

  return tables
})
