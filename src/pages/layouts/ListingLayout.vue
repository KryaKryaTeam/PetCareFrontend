<script setup lang="ts">
import ContainerComp from '@/shared/containers/containerComp.vue'
import FooterListing from '@/widget/footerListing.vue'
import HeaderListing from '@/widget/headerListing.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderListing />
  <ContainerComp>
    <RouterView />
  </ContainerComp>
  <FooterListing />
</template>
