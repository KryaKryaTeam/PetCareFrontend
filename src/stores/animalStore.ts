import { defineStore } from 'pinia'
import { ref } from 'vue'
import useUserStore from './userStore'

export interface IAnimal {
  _v: number
  _id: string
  name: string
  weight: number
  breed: string
  animalType: string
  birthDate: Date
  isSterilized: boolean
  owner: string
  avatar: string
  documents?: string[]
  injections?: string[]
  gender: 'male' | 'female' | 'unknown'
  chipId?: string
  registeredAt: Date
  notes?: string[]
  status: 'active' | 'archived'
}

const useAnimalStore = defineStore('animal', () => {
  // --- state ---
  const AnimalList = ref<IAnimal[]>([])

  // --- actions ---
  async function getAnimalList() {
    const user = useUserStore()
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal`, {
        credentials: 'include',
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })

      if (!res.ok) {
        if (res.status === 401) {
          await user.refresh()
          return await getAnimalList()
        }
        throw new Error(`Request failed with status ${res.status}`)
      }

      AnimalList.value = await res.json().then((object) => object.animals)
    } catch (err) {
      console.error('getAnimalList failed:', err)
      throw err
    }
  }

  async function deleteAnimal(id: string) {
    const user = useUserStore()
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })

      if (!res.ok) {
        if (res.status === 401) {
          console.debug('because refresh')
          await user.refresh()
          return await deleteAnimal(id)
        }
        throw new Error(`Request failed with status ${res.status}`)
      }

      AnimalList.value = AnimalList.value.filter((a) => a._id !== id)
      console.debug(AnimalList)
    } catch (err) {
      console.error('deleteAnimal failed:', err)
      throw err
    }
  }

  return {
    AnimalList,
    getAnimalList,
    deleteAnimal,
  }
})

export default useAnimalStore
