import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import deleteCard from '@/widget/deleteCard.vue'
import Button from '@/shared/ui/button.vue'
import useAnimalStore from '@/stores/animalStore'

// mock store with async deleteAnimal
vi.mock('@/stores/animalStore', () => {
  return {
    default: vi.fn(() => ({
      deleteAnimal: vi.fn(async (id: string) => Promise.resolve()),
    })),
  }
})

describe('deleteCard.vue', () => {
  let mockStore: ReturnType<typeof useAnimalStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
    mockStore = useAnimalStore()
  })

  it('calls animal.deleteAnimal and emits delete when Delete button is clicked', async () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: 'abc' },
    })
    const deleteBtn = wrapper.findAllComponents(Button)[1]
    await deleteBtn.trigger('click')

    // wait for async deleteAnimal to resolve
    await wrapper.vm.$nextTick()

    // store method should be called with correct id
    expect(mockStore.deleteAnimal).toHaveBeenCalledWith('abc')

    // delete event emitted after async call
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')![0]).toEqual([])
  })
})
