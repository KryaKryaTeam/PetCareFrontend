// eslint-disable-next-line vue/block-lang
<script setup lang="ts">
import { useBackgroundImage } from '@/features/composebles/UseBackgroundImage'
import ContainerComp from '@/shared/containers/containerComp.vue'
import FooterListing from '@/widget/FooterListing.vue'
import HeaderListing from '@/widget/headers/HeaderListing.vue'

useBackgroundImage('/images/BackgroundAuth.png')
</script>

<template>
  <HeaderListing />
  <ContainerComp>
    <RouterView />
  </ContainerComp>
  <FooterListing />
</template>
