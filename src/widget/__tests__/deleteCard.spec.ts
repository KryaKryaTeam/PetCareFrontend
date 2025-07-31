import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import deleteCard from "@/widget/deleteCard.vue";

describe('delete card test', () => {
  const wrapper = mount(deleteCard)

  it('emit works', async() => {
  const buttons = wrapper.findAll('button')
  expect(buttons).toHaveLength(2)
  await buttons[0].trigger('click')
  expect(wrapper.emitted('cancel')).toBeTruthy()
  await buttons[1].trigger('click')
  expect(wrapper.emitted('delete')).toBeTruthy()
  })
})
