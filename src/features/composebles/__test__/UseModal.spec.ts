import { defineComponent, ref } from 'vue'
import useModal from '../UseModal'
import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'

describe('useModal tests', () => {
  const opacity = ref(0.5)
  const testComponent = defineComponent({
    setup() {
      useModal(opacity.value)
    },
    template: `
  <div></div>
  `,
  })

  const wrapper = mount(testComponent)

  it('set opacity and color on Mount', () => {
    expect(document.documentElement.style.getPropertyValue('--background-color')).toBe('black')
    expect(document.documentElement.style.getPropertyValue('--backdrop-opacity')).toBe(
      `${opacity.value}`,
    )
  })

  it('unset on unmount', () => {
    wrapper.unmount()

    expect(document.documentElement.style.getPropertyValue('--background-color')).toBe('#faf6ee')
    expect(document.documentElement.style.getPropertyValue('--backdrop-opacity')).toBe('1')
  })
})
