import fastifyCookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'
import fastify from 'fastify'

export const app = fastify()

app.register(fastifyCookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
