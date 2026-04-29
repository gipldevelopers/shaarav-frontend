export async function apiRequest(url, options = {}) {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}
