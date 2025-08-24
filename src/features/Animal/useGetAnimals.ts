import useUserStore from '@/stores/User/userStore'

const useGetAnimals = async () => {
  const user = useUserStore()
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })

    if (!res.ok) {
      // If token is invalid, try refresh once
      if (res.status === 401) {
        await user.refresh()
        return await useGetAnimals()
      }

      // Otherwise throw the error
      throw new Error(`Request failed with status ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    console.error('useGetAnimals failed:', error)
    throw error // rethrow so caller can handle it
  }
}

export default useGetAnimals
