import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import deleteCard from '@/widget/deleteCard.vue'
import Button from '@/shared/ui/button.vue'
import useAnimalStore from '@/stores/animalStore'

// mock store
vi.mock('@/stores/animalStore', () => {
  return {
    default: vi.fn(() => ({
      deleteAnimal: vi.fn(() => Promise.resolve())
    }))
  }
})

describe('deleteCard.vue', () => {
  let mockStore: ReturnType<typeof useAnimalStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
    mockStore = useAnimalStore()
  })

  it('renders Cancel and Delete buttons', () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: '123' },
    })
    const buttons = wrapper.findAllComponents(Button)
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Cancel')
    expect(buttons[1].text()).toBe('Delete')
  })

  it('emits cancel when Cancel button is clicked', async () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: '123' },
    })
    const cancelBtn = wrapper.findAllComponents(Button)[0]
    await cancelBtn.trigger('click')

    expect(wrapper.emitted('cancel')).toBeTruthy()
    expect(wrapper.emitted('cancel')![0]).toEqual([])
  })

  it('calls animal.deleteAnimal and emits delete when Delete button is clicked', async () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: 'abc' },
    })
    const deleteBtn = wrapper.findAllComponents(Button)[1]
    await deleteBtn.trigger('click')

    // store method should be called
    expect(mockStore.deleteAnimal).toHaveBeenCalledWith('abc')

    // should emit delete event
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')![0]).toEqual([])
  })
})
