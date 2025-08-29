import useUserStore from '@/stores/userStore'
import { errorHandler } from './errorHandler'

export async function makeRequest(
  fetchFunction: (accessToken: string) => Promise<Response>,
  max_tryies: number,
) {
  const user = useUserStore()
  let try_ = max_tryies
  let accessToken: string = (user.accessToken as string) || 'none'

  const res = await fetchFunction(accessToken)

  if (!res.ok && try_ > 0) {
    switch (res.status) {
      case 401: {
        await user.refresh()
        return await makeRequest(fetchFunction, 1)
        break
      }
      case 408: {
        const timeout = setTimeout(
          async () => {
            clearTimeout(timeout)
            return await makeRequest(fetchFunction, try_ - 1)
          },
          import.meta.env.VITE_REQUEST_TIMEOUT,
        )
        break
      }
      default: {
        return errorHandler(res)
        break
      }
    }
  }
  if (try_ <= 0) {
    return errorHandler(res)
  }

  return await res.json()
}
