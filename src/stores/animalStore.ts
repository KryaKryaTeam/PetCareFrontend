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
  const AnimalList = ref<Map<string, IAnimal>>(new Map())

  // --- actions ---
  async function getAnimalList() {
    const user = useUserStore()

    const res = (await makeRequest(async () => {
      return await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal`, {
        credentials: 'include',
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
    }, 3)) as { animals: IAnimal[] }

    res.animals.forEach((element) => {
      AnimalList.value.set(element._id, element)
    })
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

    AnimalList.value.delete(id)
    console.debug(AnimalList)
  }

  async function changeAnimalStatus(_id: string, status: 'active' | 'archived') {
    const res = await makeRequest(async (accessToken) => {
      return await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal/${_id}/status/${status}`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
    }, 3)

    const animal = AnimalList.value.get(_id)
    AnimalList.value.set(_id, { ...animal, status: status })
  }

  async function createAnimal(AnimalObjectRequest: IAnimalRequest) {
    const res = await makeRequest(async (accessToken) => {
      return await fetch(`${import.meta.env.VITE_BACKEND_URL}/animal`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(AnimalObjectRequest),
      })
    }, 3)

    AnimalList.value.set(res.animal._id, res.animal)
  }
  return {
    AnimalList,
    getAnimalList,
    deleteAnimal,
    createAnimal,
    changeAnimalStatus,
  }
})

export default useAnimalStore
