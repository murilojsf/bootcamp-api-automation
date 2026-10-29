export const BASE_URL = 'https://serverest.dev'

export function randomUser() {
  const random = Math.floor(Math.random() * 9999)
  const now= Date.now()
  return {
    nome: `tester APi ${now}-${random}`,  
    email: `test${now}-${random}@hotmail.com`,
    password: "teste",         
    administrador: "true"
  }
}
export function randomProduct() {
  const id = Math.floor(Math.random() * 9999)
  const price= Math.floor(Math.random() * 9999)
  const quantity= Math.floor(Math.random() * 9999)
  return {
     nome: `Produto ${id}`,
     preco: price,
     descricao: "Item de teste",
     quantidade: quantity
  }
}