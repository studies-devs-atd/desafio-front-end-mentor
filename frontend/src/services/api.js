export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:3333/products/${id}`)
  const data = await response.json()

  return data
}
