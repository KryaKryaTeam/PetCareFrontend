// eslint-disable-next-line vue/block-lang
<script setup lang="ts">
import { useBackground } from '@/features/composebles/useBackground'
import ContainerComp from '@/shared/components/containerComp.vue'
import FooterListing from '@/widget/footerListing.vue'
import HeaderListing from '@/widget/headerListing.vue'

useBackground('/images/BackgroundAuth.png')
</script>

<template>
  <HeaderListing />
  <ContainerComp>
    <RouterView />
  </ContainerComp>
  <FooterListing />
</template>
