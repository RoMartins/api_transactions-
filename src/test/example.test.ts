import { test, beforeAll, afterAll, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test(' usuario pode criar uma nova transação', () => {
  request(app.server).post('/transactions').send({
    title: 'New transactions',
    amount: 5000,
    type: 'credit',
  })

  expect(201)
})
