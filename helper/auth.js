import request from 'supertest'
import { BASE_URL } from './utils'

const api = request(BASE_URL)

export async function login(email,password){
  const res = await api.post('/login').send({email,password})
  return res.body.authorization
}