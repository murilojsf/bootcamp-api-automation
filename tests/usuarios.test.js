import request from 'supertest'
import { describe,it,expect } from 'vitest'

import { BASE_URL, randomUser } from '../helper/utils'

const api = request(BASE_URL)

describe('Teste da API de Usuarios', () => {
    it('Deve listar os usuarios com sucesso', async () => {
      const res = await api.get('/usuarios')

      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('quantidade')
      expect(Array.isArray(res.body.usuarios)).toBe(true)
    })

    it('Criacao de usuario com sucesso', async () => {
      let user= randomUser()
      const res = await api.post('/usuarios').send(user)
      expect(res.statusCode).toBe(201)
      expect(res.body).toHaveProperty('_id')
      expect(res.body.message).toBe('Cadastro realizado com sucesso')
      
    })
    
})