import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUserStore = defineStore('user', () => {
  const accessToken = ref<null | unknown | string>(null)

  function newValueAccessToken(newValue: string) {
    accessToken.value = newValue
  }
  async function refresh() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/refresh`, {
      method: 'POST',
      credentials: 'include',
    })

    if (!res.ok) {
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

    const data = await res.json()
    accessToken.value = data.authorization
    console.debug(`save ${accessToken.value}`)
  }
  return {
    accessToken,
    newValueAccessToken,
    refresh,
  }
})

export default useUserStore
