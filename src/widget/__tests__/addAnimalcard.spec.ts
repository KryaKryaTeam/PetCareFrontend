import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AddAnimalCard from '@/widget/animal_board/addAnimalCard.vue'
describe('addAnimalCard compoennt test', () => {
  const wrapper = mount(AddAnimalCard)

  it('component emit "add" event on click', async () => {
    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')

    expect(wrapper.emitted('add')).toBeTruthy()
  })
})
