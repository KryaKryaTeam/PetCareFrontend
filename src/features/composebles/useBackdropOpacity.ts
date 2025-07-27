import { onMounted, onUnmounted, ref, watch } from "vue"

const useBackdropOpacity = (value: number | string) => {
  const opacity = ref(value)

  onMounted(() => {
    document.documentElement.style.setProperty('--backdrop-opacity', opacity.value.toString())
  })

  onUnmounted(() => {
    document.documentElement.style.setProperty('--backdrop-opacity', '0')
  })

  watch(opacity, (newVal) => {
    document.documentElement.style.setProperty('--backdrop-opacity', newVal.toString())
  })

  return opacity
}

export default useBackdropOpacity
