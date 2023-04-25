import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Console running on por http://localhost:${env.PORT}`)
  })
