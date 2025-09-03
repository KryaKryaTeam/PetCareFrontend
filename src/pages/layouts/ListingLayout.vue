<script setup lang="ts">
import ContainerComp from '@/shared/containers/containerComp.vue'
import FooterListing from '@/widget/FooterListing.vue'
import HeaderListing from '@/widget/headers/HeaderListing.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderListing />
  <ContainerComp>
    <RouterView />
  </ContainerComp>
  <FooterListing />
</template>
