import { describe, expect, it, beforeAll, vi, afterAll, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BreedPanel from '@/widget/breedPanel.vue'
import flushPromises from 'flush-promises'

describe("Breed Panel tests", () => {
  let wrapper: ReturnType<typeof mount>

  // hooks
  beforeAll(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(['Labrador', 'Poodle', 'Shiba Inu']),
      }) as unknown as Promise<Response>
    )
  })


  beforeEach(async () => {
    wrapper = mount(BreedPanel, {
      props: { animal: 'dog' },
    })
    await flushPromises()
  })


  afterAll(() => {
    vi.restoreAllMocks()
  })

 // tests
  it("have search input exist", () => {
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
  })

  it("have button exist and render by resolve array from server", () => {
    const buttons = wrapper.findAll('.breedButton')
    expect(buttons).toHaveLength(3)
    expect(buttons[0].text()).toBe('Labrador')
    expect(buttons[1].text()).toBe('Poodle')
    expect(buttons[2].text()).toBe('Shiba Inu')
  })

  it("emit can be triggered", async () => {
    const button = wrapper.find('#savedBtn')
    await button.trigger('click')
    expect(wrapper.emitted('breedFromPanel')).toBeTruthy()
  })
})
