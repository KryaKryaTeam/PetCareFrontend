// eslint-disable-next-line vue/block-lang
<script setup lang="ts">
import { useBackgroundImage } from '@/features/composebles/useBackgroundImage'
import ContainerComp from '@/shared/containers/containerComp.vue'
import FooterListing from '@/widget/footerListing.vue'
import HeaderListing from '@/widget/headers/headerListing.vue'

useBackgroundImage('/images/BackgroundAuth.png')
</script>

<template>
  <HeaderListing />
  <ContainerComp>
    <RouterView />
  </ContainerComp>
  <FooterListing />
</template>
