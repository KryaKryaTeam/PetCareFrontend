import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import deleteCard from '@/widget/deleteCard.vue'
import Button from '@/shared/ui/button.vue'
import useDeleteAnimals from '@/features/Animal/useDeleteAnimal'

vi.mock('@/features/Animal/useDeleteAnimal', () => {
  return {
    default: vi.fn(() => Promise.resolve())
  }
})



describe('deleteCard.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('renders two buttons (Cancel, Delete)', () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: '123' }
    })
    const buttons = wrapper.findAllComponents(Button)
    expect(buttons).toHaveLength(2)
  })

  it('emits cancel when cancel button clicked', async () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: '123' }
    })
    const buttons = wrapper.findAllComponents(Button)
    await buttons[0].trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })

  it('calls useDeleteAnimals and emits delete when delete button clicked', async () => {
    const wrapper = mount(deleteCard, {
      props: { idToDelete: 'abc' }
    })
    const buttons = wrapper.findAllComponents(Button)

    await buttons[1].trigger('click')

    // check composable called with prop
    expect(useDeleteAnimals).toHaveBeenCalledWith('abc')

    // check event emitted with id
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')![0]).toEqual(['abc'])
  })
})
