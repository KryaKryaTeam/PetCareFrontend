import type { ClassicColor, HexColor } from '@/@types'
import { onMounted, onUnmounted } from 'vue'


const useBackgroundColor = (color: HexColor | ClassicColor) => {
  onMounted(() => {
    document.documentElement.style.setProperty('--background-color', color)
  })
  onUnmounted(() => {
    document.documentElement.style.setProperty('--background-color', '#faf6ee')
  })
}

export default useBackgroundColor
