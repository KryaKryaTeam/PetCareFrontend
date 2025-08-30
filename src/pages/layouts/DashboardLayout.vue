<script setup lang="ts">
import ContainerBoard from '@/shared/containers/containerBoard.vue'
import { useUiStore } from '@/stores/uiStateStore'
import DeleteCard from '@/widget/deleteCard.vue'
import HeaderDashboard from '@/widget/headers/headerDashboard.vue'
import DeleteModal from '@/widget/modals/deleteModal.vue'
import { RouterView } from 'vue-router'

const uiStore = useUiStore()
</script>

<template>
  <div :class="['darkness', { toggle: !uiStore.darknessState }]">
    <DeleteModal />
  </div>
  <HeaderDashboard />
  <ContainerBoard>
    <RouterView />
  </ContainerBoard>
</template>

<style lang="css" scoped>
.darkness {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);

  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle {
  display: none;
}
</style>
