<script setup lang="ts">
import ContainerBoard from '@/shared/containers/containerBoard.vue'
import HeaderDashboard from '@/widget/headers/headerDashboard.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderDashboard />
  <ContainerBoard>
    <RouterView />
  </ContainerBoard>
</template>
