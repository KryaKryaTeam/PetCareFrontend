import { errorHandler } from '@/shared/utils/networking/errorHandler'
import { makeRequest } from '@/shared/utils/networking/makeRequest'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type IUserRole = 'user' | 'admin'
interface IProfile {
  username: string
  email: string
  avatar: string
  roles: IUserRole[]
  createdAt: Date
}

const useUserStore = defineStore('user', () => {
  const accessToken = ref<null | unknown | string>(null)
  const profile = ref<IProfile>()

  function newValueAccessToken(newValue: string) {
    accessToken.value = newValue
  }
  async function refresh() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/refresh`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    })

    if (!res.ok) await errorHandler(res)

    const data = await res.json()
    accessToken.value = data.authorization
    console.debug(`save ${accessToken.value}`)
  }

  async function requestProfile() {
    const res = await makeRequest(async () => {
      return await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${accessToken.value}`,
        },
      })
    }, 3)

    const profile_ = {
      ...res,
      createdAt: new Date(res.createdAt),
      lastLogin: new Date(res.lastLogin),
      avatar: res.avatar.replace(
        '%backend%',
        import.meta.env.VITE_BACKEND_URL.replace('/api', null),
      ),
    }

    profile.value = profile_
  }
  return {
    accessToken,
    newValueAccessToken,
    refresh,
    requestProfile,
  }
})

export default useUserStore
