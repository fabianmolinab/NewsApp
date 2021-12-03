const key = 'e8bd0751abd84ee3958608e54422ee20'

export const getAPI = async () => {
  const url = ` https://newsapi.org/v2/everything?q=keyword&apiKey=${key}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}
