export async function errorHandler(res: Response) {
  let errorMsg = `HTTP ${res.status} ${res.statusText}`
  try {
    const errorData = await res.json()
    errorMsg = errorData.message || JSON.stringify(errorData)
  } catch {
    const text = await res.text()
    if (text) errorMsg = text
  }

  throw new Error(errorMsg)
}
