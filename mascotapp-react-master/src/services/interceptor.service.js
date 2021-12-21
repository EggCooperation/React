export const httpReq = async (response) => {

  if (response.ok) {
    return await response.json()
  }
  const data = await response.json()
  return Promise.reject(data.message)

}