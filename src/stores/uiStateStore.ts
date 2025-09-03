import { defineStore } from 'pinia'
import { ref } from 'vue'
import { boolean, string } from 'zod'

export const useUiStore = defineStore('ui', () => {
  //--state--
  const darknessState = ref<boolean>(false)
  const deleteDialog = ref<{ active: boolean; _id: string }>({ active: false, _id: '' })
  const asideState = ref<boolean>(false)

  //--action--
  function toggleDarkness() {
    darknessState.value = !darknessState.value
  }
  function onnDeleteDialog(_id: string) {
    toggleDarkness()
    deleteDialog.value = { active: true, _id }
  }
  function offDeleteDialog() {
    toggleDarkness()
    deleteDialog.value = { active: false, _id: '' }
  }
  function resetAllStates() {
    darknessState.value = false
    deleteDialog.value = { active: false, _id: '' }
  }
  function toggleAside() {
    asideState.value = !asideState.value
  }

  return {
    resetAllStates,
    deleteDialog,
    darknessState,
    toggleDarkness,
    onnDeleteDialog,
    offDeleteDialog,
    asideState,
    toggleAside,
  }
})
