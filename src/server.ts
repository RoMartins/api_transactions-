import fastify from 'fastify'
import { transaction } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(transaction, {
  prefix: 'transactions',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Console running on por http://localhost:3333')
  })
