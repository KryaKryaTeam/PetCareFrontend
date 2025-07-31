import { describe, it, expect, vi } from 'vitest'


let mountedCallback: () => void
let unmountedCallback: () => void

vi.mock('vue', () => {
  return {
    onMounted: (fn: () => void) => {
      mountedCallback = fn
    },
    onUnmounted: (fn: () => void) => {
      unmountedCallback = fn
    },
  }
})

import useBackgroundColor from '../useBackgroundColor'

describe('useBackgroundColor', () => {
  it('sets and resets --background-color CSS variable', () => {
    const color = 'black'

    document.documentElement.style.removeProperty('--background-color')

    useBackgroundColor(color)

    mountedCallback()

    expect(document.documentElement.style.getPropertyValue('--background-color')).toBe(color)

    unmountedCallback()

    expect(document.documentElement.style.getPropertyValue('--background-color')).toBe('#faf6ee')
  })
})
