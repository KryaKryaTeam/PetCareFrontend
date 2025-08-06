import { onMounted, onUnmounted, ref, watch } from 'vue'


const useModal = (value: number | string) => {
  const opacity = ref(Number(value).toString())

    onMounted(() => {
      document.documentElement.style.setProperty('--background-color', 'black')
      document.documentElement.style.setProperty('--backdrop-opacity', opacity.value)
    })

    onUnmounted(() => {
      document.documentElement.style.setProperty('--background-color', '#faf6ee')
      document.documentElement.style.setProperty('--backdrop-opacity', '1')
    })

    watch(opacity, (newVal) => {
      document.documentElement.style.setProperty('--backdrop-opacity', newVal.toString())
    })

    return opacity
}

export default useModal
