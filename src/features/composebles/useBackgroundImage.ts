import { onMounted, onUnmounted } from 'vue'

export function useBackgroundImage(backgroundUrl: string) {
  onMounted(() => {
    document.documentElement.style.setProperty('--background-image', `url('${backgroundUrl}')`)
  })
  onUnmounted(() => {
    document.documentElement.style.setProperty('--background-image', 'none')
  })
}

