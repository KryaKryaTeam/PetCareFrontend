import { defineStore } from 'pinia'
import { ref } from 'vue'
import useUserStore from './userStore'
import { makeRequest } from '@/shared/utils/networking/makeRequest'
type Gender = 'male' | 'unknow' | 'female'
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
interface IAnimalRequest {
  name: String
  breed: Object
  animaltype: Object
  birthDate: Date
  isSterilized: boolean
  avatar: String
  gender: Gender
  chipId: String
}
const useAnimalStore = defineStore('animal', () => {
  // --- state ---
  const AnimalList = ref<IAnimal[]>([])

  // --- actions ---
  async function getAnimalList() {
    const user = useUserStore()

    const res = await makeRequest(async () => {
      return await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal`, {
        credentials: 'include',
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
    }, 3)

    AnimalList.value = res.animals
  }

  async function deleteAnimal(id: string) {
    const res = await makeRequest(async (accessToken) => {
      return await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
    }, 3)

    AnimalList.value = AnimalList.value.filter((a) => a._id !== id)
    console.debug(AnimalList)
  }

  async function createAnimal(AnimalObjectRequest: IAnimalRequest) {
    const user = useUserStore()
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          authorization: `Bearer ${user.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(AnimalObjectRequest),
      })
      if (!res.ok) {
        if (res.status === 401) {
          console.debug('because refresh')
          await user.refresh()
          return await createAnimal(AnimalObjectRequest)
        }
        throw new Error(`Request failed with status ${res.status}`)
      }
      AnimalList.value.push(res.animal)
    } catch (err) {
      console.error('createAnimal failed:', err)
      throw err
    }
  }
  return {
    AnimalList,
    getAnimalList,
    deleteAnimal,
    createAnimal,
  }
})

export default useAnimalStore
