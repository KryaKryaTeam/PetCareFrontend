import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, toRaw, watch } from 'vue'
import useUserStore from '@/stores/UserStore'
import { makeRequest } from '@/shared/utils/networking/makeRequest'
import useLabelBoardObserver from '@/features/Observer/LabelBoardObserver'
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

export type filterParamType = 'archived' | 'dog'
const useAnimalStore = defineStore('animal', () => {
  // --- stores ---
  const activeLabel = storeToRefs(useLabelBoardObserver()).activeListener
  // --- state ---
  const AnimalList = ref<Map<string, IAnimal>>(new Map())
  const FiltredAnimalList = computed((): Set<IAnimal> => {
  if (!activeLabel.value) return new Set<IAnimal>()
  return getFiltredAnimalList(activeLabel.value.param)
})


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
    console.log(res.animals)
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
function getFiltredAnimalList(filterParam: any): Set<IAnimal> {
  const FiltredList = new Set<IAnimal>()

  if (filterParam === 'archived') {
    for (const [_, animal] of AnimalList.value.entries()) {
      if (animal.status === 'archived') {
        FiltredList.add(toRaw(animal))
      }
    }
  } else {
    for (const [_, animal] of AnimalList.value.entries()) {
      if (animal.animalType === filterParam) {
        FiltredList.add(toRaw(animal))
      }
    }
  }

  return FiltredList
}


  return {
    AnimalList,
    FiltredAnimalList,
    getAnimalList,
    deleteAnimal,
    createAnimal,
    changeAnimalStatus,
    getFiltredAnimalList,
  }
})

export default useAnimalStore
