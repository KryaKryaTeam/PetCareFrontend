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
  const isInRefresh = ref<{ state: boolean; endedWithError: boolean }>({
    state: false,
    endedWithError: false,
  })

  function newValueAccessToken(newValue: string) {
    accessToken.value = newValue
  }
  async function refresh() {
    if (!isInRefresh.value.state) {
      isInRefresh.value.state = true
      isInRefresh.value.endedWithError = false
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/refresh`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
      })

      if (!res.ok) {
        isInRefresh.value.state = false
        isInRefresh.value.endedWithError = true
        await errorHandler(res)
      }

      const data = await res.json()
      isInRefresh.value.state = false
      accessToken.value = data.authorization
      console.debug(`save ${accessToken.value}`)
      return
    }
    const pr = new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        const user = useUserStore()
        console.debug('interval')
        if (!user.isInRefresh.state) {
          clearInterval(interval)
          if (user.isInRefresh.endedWithError) return reject('Refresh is failed!')
          else return resolve(0)
        }
      }, 1000)
    })

    return pr
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
      ...res.profile,
      createdAt: new Date(res.profile.createdAt),
      lastLogin: new Date(res.profile.lastLogin),
      avatar: res.profile.avatar.replace('%backend%', ''),
    }

    profile.value = profile_
  }
  return {
    accessToken,
    newValueAccessToken,
    refresh,
    requestProfile,
    profile,
    isInRefresh,
  }
})

export default useUserStore
