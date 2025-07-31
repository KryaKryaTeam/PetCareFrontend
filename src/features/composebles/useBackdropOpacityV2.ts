import { ref, watch, type Ref } from 'vue'

const useBackdropOpacityV2 = (state: Ref<boolean>, value: number | string) => {
  const opacity = ref(Number(value).toString())
  watch(state, () => {
    if (state) {
      document.documentElement.style.setProperty('--backdrop-opacity', opacity.value)
    } else {
      document.documentElement.style.setProperty('--backdrop-opacity', '1')
    }
  })

  return opacity
}

export default useBackdropOpacityV2
