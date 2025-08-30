<script setup lang="ts">
import { useUiStore } from '@/stores/uiStateStore'
import { PanelLeft } from 'lucide-vue-next'

const ui = useUiStore()

function toggleAside() {
  ui.toggleDarkness()
  ui.toggleAside()
}
</script>
<template>
  <button><PanelLeft color="#1A7D87" width="30px" height="30px" @click="toggleAside()" /></button>
</template>
<style lang="css" scoped></style>
