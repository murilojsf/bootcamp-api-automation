import request from 'supertest'
import { describe,it,expect } from 'vitest'

import { BASE_URL } from '../helper/utils'

const api = request(BASE_URL)

describe('Teste da API de Login', () => {
    it('Login de usuario com sucesso', async () => {
      const res = await api.post('/login').send(
        {
          "email": "test2@murilo.com",
          "password": "teste"
        }
      )
      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('authorization')
      expect(res.body.message).toBe('Login realizado com sucesso')
    })

})
