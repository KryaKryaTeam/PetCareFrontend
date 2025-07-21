import { onMounted, onUnmounted } from "vue"

export function useBackground(backgroundUrl: string) {
    onMounted(() => {
        document.documentElement.style.setProperty("--background-image", `url('${backgroundUrl}')`)
    })
    onUnmounted(() => {
        document.documentElement.style.setProperty("--background-image", "none")
    })
}
