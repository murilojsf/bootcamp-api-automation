import request from 'supertest'
import { describe,it,expect, beforeAll } from 'vitest'

import { BASE_URL, randomProduct } from '../helper/utils'
import { login } from '../helper/auth'

const api = request(BASE_URL)
let token = ''
let produtoId = ''

beforeAll(async () => {
    token = await login('jefercaye@teste.com','123456')
})

describe('Teste da API de Produtos', () => {
    it('Criacao de Produto com sucesso', async () => {
    let product = randomProduct()
    const res = await api.post('/produtos')
        .set('Authorization',token)
        .send(product)
    expect(res.statusCode).toBe(201)
    expect(res.body.message).toBe('Cadastro realizado com sucesso')
    produtoId = res.body._id
    })
})
    it('Deletando produto com sucesso', async () => {
    const res = await api.delete(`/produtos/${produtoId}`)
        .set('Authorization',token)
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Registro excluído com sucesso')
 })


