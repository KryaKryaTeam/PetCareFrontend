import { onMounted, onUnmounted } from "vue"

const useBackgroundColor = (color: string) => {
      onMounted(() => {
        document.documentElement.style.setProperty('--background-color', `url('${color}')`)
      })
      onUnmounted(() => {
        document.documentElement.style.setProperty('--background-color', '#faf6ee')
      })
}
export default useBackgroundColor
