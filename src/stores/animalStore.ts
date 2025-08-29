import { defineStore } from 'pinia'
import { ref } from 'vue'
import useUserStore from './userStore'
import { makeRequest } from '@/shared/utils/networking/makeRequest'

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

  return {
    AnimalList,
    getAnimalList,
    deleteAnimal,
  }
})

export default useAnimalStore
